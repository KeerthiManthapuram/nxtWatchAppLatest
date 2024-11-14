import {Link, withRouter} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  GamingCard,
  GamingImageHolder,
  GamingCardTitle,
  GamingImage,
  GamingCardText,
} from './styledComponents'

const GamingCardItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isLightTheme} = value
        return (
          <GamingCard
            as={Link}
            style={{textDecoration: 'none'}}
            to={`/videos/${id}`}
            lightTheme={isLightTheme}
          >
            <GamingImageHolder>
              <GamingImage src={thumbnailUrl} alt="video thumbnail" />
            </GamingImageHolder>
            <GamingCardTitle lighttheme={isLightTheme}>{title}</GamingCardTitle>
            <GamingCardText lighttheme={isLightTheme}>
              {viewCount} Watching Worldwide
            </GamingCardText>
          </GamingCard>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(GamingCardItem)
