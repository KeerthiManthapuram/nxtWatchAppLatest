import {Component} from 'react'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom'

import './App.css'

import LoginPage from './components/LoginPage'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import NotFound from './components/NotFound'

import VideoItemDetails from './components/VideoItemDetails'

import SavedVideosView from './components/SavedVideosView'

import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

class App extends Component {
  state = {
    isLightTheme: true,
    activeSectionId: 1,
    savedVideos: [],
  }

  componentDidMount() {
    const {location} = this.props
    const {pathname} = location

    // Map URLs to section IDs
    const pathToSectionId = {
      '/': 1,
      '/trending': 2,
      '/gaming': 3,
      '/saved-videos': 4,
    }

    // Set activeSectionId based on the current URL
    const activeSectionId = pathToSectionId[pathname] || 1
    this.setState({activeSectionId})
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isLightTheme: !prevState.isLightTheme,
    }))
  }

  changeActiveSection = id => {
    this.setState({
      activeSectionId: id,
    })
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({
        savedVideos: [...savedVideos, video],
      })
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({
      savedVideos: updatedSavedVideos,
    })
  }

  render() {
    const {isLightTheme, activeSectionId, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isLightTheme,
          savedVideos,
          activeSectionId,
          changeTheme: this.changeTheme,
          addVideo: this.addVideo,
          removeVideo: this.removeVideo,
          changeActiveSection: this.changeActiveSection,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideosView}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}

export default withRouter(App)
