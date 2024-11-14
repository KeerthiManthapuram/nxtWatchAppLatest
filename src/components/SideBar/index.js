import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {ImFire} from 'react-icons/im'

import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import {
  SidebarSection,
  SectionsHolder,
  Section,
  SectionName,
  SectionIconHolder,
  FooterSection,
  ContactText,
  ContactIcons,
  IconImage,
  ContactEndText,
} from './styledComponents'

const backgroundColors = {
  light: {
    default: '',
    active: '#f1f5f9',
  },
  dark: {
    default: '',
    active: '#212121',
  },
}

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme, activeSectionId, changeActiveSection} = value
      const onChangingActiveSection = id => {
        changeActiveSection(id)
      }

      const sections = [
        {
          id: 1,
          name: 'Home',
          icon: AiFillHome,
          path: '/',
        },
        {
          id: 2,
          name: 'Trending',
          icon: ImFire,
          path: '/trending',
        },
        {
          id: 3,
          name: 'Gaming',
          icon: SiYoutubegaming,
          path: '/gaming',
        },
        {
          id: 4,
          name: 'Saved videos',
          icon: MdPlaylistAdd,
          path: '/saved-videos',
        },
      ]
      return (
        <SidebarSection data-testid="banner" lighttheme={isLightTheme}>
          <SectionsHolder>
            {sections.map(eachSection => {
              const isActive = eachSection.id === activeSectionId
              let iconColor
              if (eachSection.id === activeSectionId) {
                iconColor = '#ff0b37'
              } else {
                iconColor = isLightTheme ? '#000000' : '#ffffff'
              }

              let sectionBgColor
              if (isLightTheme) {
                sectionBgColor = isActive
                  ? backgroundColors.light.active
                  : backgroundColors.light.default
              } else {
                sectionBgColor = isActive
                  ? backgroundColors.dark.active
                  : backgroundColors.dark.default
              }

              const IconComponent = eachSection.icon

              return (
                <Link
                  to={eachSection.path}
                  key={eachSection.id}
                  onClick={() => onChangingActiveSection(eachSection.id)}
                  style={{textDecoration: 'none'}}
                >
                  <Section
                    style={{backgroundColor: sectionBgColor}}
                    key={eachSection.id}
                    isActive={eachSection.id === activeSectionId}
                    lighttheme={isLightTheme}
                    onClick={() => onChangingActiveSection(eachSection.id)}
                  >
                    <SectionIconHolder>
                      <IconComponent color={iconColor} size="1.3rem" />
                    </SectionIconHolder>
                    <SectionName lighttheme={isLightTheme}>
                      {eachSection.name}
                    </SectionName>
                  </Section>
                </Link>
              )
            })}
          </SectionsHolder>

          <FooterSection>
            <ContactText lighttheme={isLightTheme}>CONTACT US</ContactText>
            <ContactIcons>
              <IconImage
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <IconImage
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <IconImage
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </ContactIcons>
            <ContactEndText lighttheme={isLightTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactEndText>
          </FooterSection>
        </SidebarSection>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(SideBar)
