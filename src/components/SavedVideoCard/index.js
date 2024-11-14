import {withRouter, Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {
  SavedVideoItem,
  SavedProfileTextHolder,
  SavedProfile,
  SavedVideoTextHolder,
  ThumbnailHolder,
  SavedThumbnailImg,
  SavedVideoTitle,
  SavedVideoText,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const SavedVideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    title,
    profileImageUrl,
    publishedAt,
    channelName,
    viewCount,
  } = videoDetails

  const time = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <SavedVideoItem
            lighttheme={isLightTheme}
            as={Link}
            style={{textDecoration: 'none'}}
            to={`/videos/${id}`}
            key={id}
          >
            <ThumbnailHolder>
              <SavedThumbnailImg alt="video thumbnail" src={thumbnailUrl} />
            </ThumbnailHolder>
            <SavedProfileTextHolder>
              <SavedProfile src={profileImageUrl} alt="channel logo" />
              <SavedVideoTextHolder>
                <SavedVideoTitle lighttheme={isLightTheme}>
                  {title}
                </SavedVideoTitle>
                <SavedVideoText lighttheme={isLightTheme}>
                  {channelName}
                </SavedVideoText>
                <SavedVideoText lighttheme={isLightTheme}>
                  {viewCount} views . {time}
                </SavedVideoText>
              </SavedVideoTextHolder>
            </SavedProfileTextHolder>
          </SavedVideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(SavedVideoCard)
