import React from 'react'

const ThemeContext = React.createContext({
  isLightTheme: true,
  activeSectionId: 1,
  savedVideos: [],
  changeActiveSection: () => {},
  changeTheme: () => {},
  addVideo: () => {},
})

export default ThemeContext
