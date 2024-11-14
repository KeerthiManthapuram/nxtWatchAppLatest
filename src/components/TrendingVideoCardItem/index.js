import {withRouter, Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingCard,
  TrendingImage,
  ProfileTextSection,
  ProfileHolder,
  ProfileTrendingImage,
  TrendingTextHolder,
  TrendingCardTitle,
  ChannelViewsYears,
  TrendingChannelText,
  TrendingText,
} from './styledComponents'

const TrendingVideoCardItem = props => {
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

  const time = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <TrendingCard
            as={Link}
            style={{textDecoration: 'none'}}
            to={`/videos/${id}`}
            lighttheme={isLightTheme}
          >
            <TrendingImage src={thumbnailUrl} alt="video thumbnail" />
            <ProfileTextSection>
              <ProfileHolder>
                <ProfileTrendingImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
              </ProfileHolder>
              <TrendingTextHolder>
                <TrendingCardTitle lighttheme={isLightTheme}>
                  {title}
                </TrendingCardTitle>
                <ChannelViewsYears>
                  <TrendingChannelText lighttheme={isLightTheme}>
                    {channelName}
                  </TrendingChannelText>

                  <TrendingText lighttheme={isLightTheme}>
                    {viewCount} views . {time}
                  </TrendingText>
                </ChannelViewsYears>
              </TrendingTextHolder>
            </ProfileTextSection>
          </TrendingCard>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(TrendingVideoCardItem)
