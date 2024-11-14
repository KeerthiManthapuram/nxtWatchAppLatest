import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {
  VideoDetailsContainer,
  VideoDetailsLeftRightSection,
  VideoDetailsRightSection,
  FailureView,
  FailureImage,
  FailureBoldText,
  FailureText,
  RetryBtn,
  LoadingView,
} from './styledComponents'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'

import SideBar from '../SideBar'

import PlayVideoView from '../PlayVideoView'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(`response is ${response}`)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channelName: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  clickedLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  clickedDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderLoadingView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <div className="loader-container" data-testid="loader">
            <LoadingView lighttheme={isLightTheme}>
              <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
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
            <FailureImage src={failureImgUrl} alt="failure view" />
            <FailureBoldText lighttheme={isLightTheme}>
              Oops! Something Went Wrong
            </FailureBoldText>
            <FailureText lighttheme={isLightTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <RetryBtn onClick={this.getVideoDetails}>Retry</RetryBtn>
          </FailureView>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoDetails = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    console.log(videoDetails)
    return (
      <PlayVideoView
        key={videoDetails.id}
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisliked={isDisliked}
        clickedLike={this.clickedLike}
        clickedDislike={this.clickedDislike}
      />
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value

          return (
            <VideoDetailsContainer
              data-testid="videoItemDetails"
              lighttheme={isLightTheme}
            >
              <Header />
              <VideoDetailsLeftRightSection>
                <SideBar />
                <VideoDetailsRightSection>
                  {this.renderVideos()}
                </VideoDetailsRightSection>
              </VideoDetailsLeftRightSection>
            </VideoDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
