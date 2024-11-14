import {withRouter, Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardHolder,
  VideoImg,
  ProfileDetailsSection,
  ProfileImgHolder,
  ProfileImg,
  DetailsHolder,
  VideoTitle,
  ChannelName,
  CardText,
} from './styledComponents'

const VideoCardItem = props => {
  const {videoDetails} = props

  const {
    id,
    title,
    thumbnailUrl,
    channelName,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoDetails

  const yearsAgo = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value

        return (
          <VideoCardHolder
            as={Link}
            style={{textDecoration: 'none'}}
            to={`/videos/${id}`}
            lighttheme={isLightTheme}
          >
            <VideoImg src={thumbnailUrl} alt="video thumbnail" />
            <ProfileDetailsSection>
              <ProfileImgHolder>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
              </ProfileImgHolder>
              <DetailsHolder>
                <VideoTitle lighttheme={isLightTheme}>{title}</VideoTitle>
                <ChannelName lighttheme={isLightTheme}>
                  {channelName}
                </ChannelName>

                <CardText lighttheme={isLightTheme}>
                  {viewCount} views . {yearsAgo}.
                </CardText>
              </DetailsHolder>
            </ProfileDetailsSection>
          </VideoCardHolder>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(VideoCardItem)
