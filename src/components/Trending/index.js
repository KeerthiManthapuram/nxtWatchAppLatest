import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {ImFire} from 'react-icons/im'

import {
  TrendingBgContainer,
  TrendingLeftRightSection,
  TrendingRightSection,
  TrendingRightSectionHeader,
  TrendingIconHolder,
  TrendingHeading,
  TrendingVideosHolder,
  FailureView,
  FailureImage,
  FailureBoldText,
  FailureText,
  RetryBtn,
  LoadingView,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'

import SideBar from '../SideBar'

import TrendingVideoCardItem from '../TrendingVideoCardItem'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
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
            <FailureImage src={failureImgUrl} alt="failure view" />
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

  renderTrendingVideos = () => {
    const {videosList} = this.state
    return (
      <TrendingVideosHolder>
        {videosList.map(eachVideo => (
          <TrendingVideoCardItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideosHolder>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
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
            <TrendingBgContainer
              data-testid="trending"
              lighttheme={isLightTheme}
            >
              <Header />
              <TrendingLeftRightSection>
                <SideBar />
                <TrendingRightSection lighttheme={isLightTheme}>
                  <TrendingRightSectionHeader lighttheme={isLightTheme}>
                    <TrendingIconHolder lighttheme={isLightTheme}>
                      <ImFire color="#ff0000" size="2.1rem" />
                    </TrendingIconHolder>
                    <TrendingHeading lighttheme={isLightTheme}>
                      Trending
                    </TrendingHeading>
                  </TrendingRightSectionHeader>
                  {this.renderVideos()}
                </TrendingRightSection>
              </TrendingLeftRightSection>
            </TrendingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
