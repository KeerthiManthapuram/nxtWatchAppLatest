import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  VideosListContainer,
  FailureView,
  FailureImage,
  FailureBoldText,
  FailureText,
  RetryBtn,
  LoadingView,
} from './styledComponents'

import VideoCardItem from '../VideoCardItem'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  noVideos: 'NO_VIDEOS',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideosSection extends Component {
  state = {
    videosDetails: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  componentDidUpdate(prevProps) {
    // Check if searchInput has changed
    const {searchInput} = this.props
    if (prevProps.searchInput !== searchInput) {
      this.getVideosDetails() // Fetch new videos if searchInput has changed
    }
  }

  getVideosDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.props
    const videosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videosApiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channelName: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))

      this.setState({
        videosDetails: updatedData,
        apiStatus:
          updatedData.length !== 0
            ? apiStatusConstants.success
            : apiStatusConstants.noVideos,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <div className="loader-container" data-testid="loader">
            <LoadingView lighttheme={isLightTheme}>
              <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
            </LoadingView>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const failureImgUrl = isLightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

        return (
          <FailureView>
            <FailureImage src={failureImgUrl} alt="failure-image" />
            <FailureBoldText lighttheme={isLightTheme}>
              Oops! Something Went Wrong
            </FailureBoldText>
            <FailureText lighttheme={isLightTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <RetryBtn onClick={this.getVideosDetails}>Retry</RetryBtn>
          </FailureView>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderNoSearchResultsFoundView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        const imageUrl =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

        return (
          <FailureView>
            <FailureImage src={imageUrl} alt="no videos" />
            <FailureBoldText lighttheme={isLightTheme}>
              No Search results found
            </FailureBoldText>
            <FailureText lighttheme={isLightTheme}>
              Try different key words or remove search filter
            </FailureText>
            <RetryBtn onClick={this.getVideosDetails}>Retry</RetryBtn>
          </FailureView>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideosView = () => {
    const {videosDetails} = this.state
    return (
      <VideosListContainer>
        {videosDetails.map(eachVideo => (
          <VideoCardItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosListContainer>
    )
  }

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.noVideos:
        return this.renderNoSearchResultsFoundView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }
}

export default VideosSection
