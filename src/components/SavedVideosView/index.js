import {Component} from 'react'

import {RiPlayListAddFill} from 'react-icons/ri'

import {
  SavedVideosContainer,
  SavedLeftRightHolder,
  SavedRightSection,
  SavedRightSectionHeader,
  SavedIconHolder,
  SavedHeading,
  SavedBoldText,
  SavedThinText,
  NoSavedVideosFoundView,
  NoSavedImage,
  SavedVideosList,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'

import SideBar from '../SideBar'

import SavedVideoCard from '../SavedVideoCard'

class SavedVideosView extends Component {
  renderSavedVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideos} = value

        return (
          <SavedVideosList>
            {savedVideos.map(eachVideo => (
              <SavedVideoCard key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </SavedVideosList>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderNoSavedVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <NoSavedVideosFoundView lighttheme={isLightTheme}>
            <NoSavedImage
              alt="no saved videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
            />
            <SavedBoldText lighttheme={isLightTheme}>
              No saved videos found
            </SavedBoldText>
            <SavedThinText lighttheme={isLightTheme}>
              You can save your videos while watching them
            </SavedThinText>
          </NoSavedVideosFoundView>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme, savedVideos} = value
          const noSavedVideos = savedVideos.length === 0
          return (
            <SavedVideosContainer
              data-testid="savedVideos"
              lighttheme={isLightTheme}
            >
              <Header />
              <SavedLeftRightHolder>
                <SideBar />
                <SavedRightSection>
                  <SavedRightSectionHeader lighttheme={isLightTheme}>
                    <SavedIconHolder lighttheme={isLightTheme}>
                      <RiPlayListAddFill color="#ff0000" size="2.1rem" />
                    </SavedIconHolder>
                    <SavedHeading lighttheme={isLightTheme}>
                      Saved Videos
                    </SavedHeading>
                  </SavedRightSectionHeader>
                  {noSavedVideos
                    ? this.renderNoSavedVideosView()
                    : this.renderSavedVideos()}
                </SavedRightSection>
              </SavedLeftRightHolder>
            </SavedVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedVideosView
