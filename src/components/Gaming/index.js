import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {SiYoutubegaming} from 'react-icons/si'

import {
  GamingBgContainer,
  GamingLeftRightSection,
  GamingRightSection,
  GamingRightSectionHeader,
  GamingIconHolder,
  GamingHeading,
  GamingVideosHolder,
  FailureView,
  FailureImage,
  FailureBoldText,
  FailureText,
  RetryBtn,
  LoadingView,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import GamingCardItem from '../GamingCardItem'

import Header from '../Header'

import SideBar from '../SideBar'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
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
            <RetryBtn onClick={this.getGamingVideos}>Retry</RetryBtn>
          </FailureView>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingVideos = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosHolder>
        {gamingVideos.map(eachVideo => (
          <GamingCardItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideosHolder>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()
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
            <GamingBgContainer data-testid="gaming" lighttheme={isLightTheme}>
              <Header />
              <GamingLeftRightSection>
                <SideBar />
                <GamingRightSection lighttheme={isLightTheme}>
                  <GamingRightSectionHeader lighttheme={isLightTheme}>
                    <GamingIconHolder lighttheme={isLightTheme}>
                      <SiYoutubegaming color="#ff0000" size="2.1rem" />
                    </GamingIconHolder>
                    <GamingHeading lighttheme={isLightTheme}>
                      Gaming
                    </GamingHeading>
                  </GamingRightSectionHeader>
                  {this.renderVideos()}
                </GamingRightSection>
              </GamingLeftRightSection>
            </GamingBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
