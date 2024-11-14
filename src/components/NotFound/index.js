import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundImg,
  NotFoundBoldText,
  NotFoundText,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme} = value
      const imageUrl = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <NotFoundContainer lighttheme={isLightTheme}>
          <Header />
          <NotFoundContent lighttheme={isLightTheme}>
            <NotFoundImg alt="not found" src={imageUrl} />
            <NotFoundBoldText lighttheme={isLightTheme}>
              Page Not Found
            </NotFoundBoldText>
            <NotFoundText lighttheme={isLightTheme}>
              We are sorry, the page you requested could not be found.
            </NotFoundText>
          </NotFoundContent>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
