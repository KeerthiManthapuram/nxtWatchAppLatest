import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {IoSunnyOutline} from 'react-icons/io5'

import {FaMoon, FaBars} from 'react-icons/fa'

import {FiLogOut} from 'react-icons/fi'

import {AiFillHome} from 'react-icons/ai'

import {ImFire} from 'react-icons/im'

import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import {
  HeaderSection,
  Logo,
  HeaderRightSection,
  ThemeIconHolder,
  ProfileIconHolder,
  ProfileImg,
  LogoutBtn,
  SmIconHolder,
  PopupHolder,
  ButtonsRow,
  PopupText,
  CancelButton,
  ConfirmButton,
  SidebarMenu,
  SidebarLink,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isLightTheme, changeTheme} = value
      const onChangeTheme = () => {
        changeTheme()
      }
      const websiteLogo = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      const iconColor = isLightTheme ? '#000000' : '#ffffff'
      const themeLogo = isLightTheme ? (
        <FaMoon size="1.5rem" color={iconColor} />
      ) : (
        <IoSunnyOutline size="1.5rem" color={iconColor} />
      )

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        props.history.replace('/login')
      }

      return (
        <HeaderSection lighttheme={isLightTheme}>
          <Link to="/">
            <Logo src={websiteLogo} alt="website logo" />
          </Link>
          <HeaderRightSection>
            <ThemeIconHolder data-testid="theme" onClick={onChangeTheme}>
              {themeLogo}
            </ThemeIconHolder>
            <ProfileIconHolder>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileIconHolder>

            <Popup
              modal
              trigger={
                <SmIconHolder>
                  <FaBars size="1rem" color={iconColor} />
                </SmIconHolder>
              }
              closeOnDocumentClick
              contentStyle={{
                width: '80%',
                height: 'auto',
                backgroundColor: isLightTheme ? '#f8fafc' : '#0f0f0f',
              }}
              overlayStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
            >
              {close => (
                <SidebarMenu lighttheme={isLightTheme}>
                  <SidebarLink
                    to="/"
                    onClick={() => close()}
                    lighttheme={isLightTheme}
                  >
                    <AiFillHome
                      color={isLightTheme ? '#000000' : '#ffffff'}
                      size="1.5rem"
                      style={{marginRight: '1rem', marginLeft: '0.5rem'}}
                    />
                    Home
                  </SidebarLink>
                  <SidebarLink
                    to="/trending"
                    onClick={() => close()}
                    lighttheme={isLightTheme}
                  >
                    <ImFire
                      color={isLightTheme ? '#000000' : '#ffffff'}
                      size="1.5rem"
                      style={{marginRight: '1rem', marginLeft: '0.5rem'}}
                    />
                    Trending
                  </SidebarLink>
                  <SidebarLink
                    to="/gaming"
                    onClick={() => close()}
                    lighttheme={isLightTheme}
                  >
                    <SiYoutubegaming
                      color={isLightTheme ? '#000000' : '#ffffff'}
                      size="1.5rem"
                      style={{marginRight: '1rem', marginLeft: '0.5rem'}}
                    />
                    Gaming
                  </SidebarLink>
                  <SidebarLink
                    to="/saved-videos"
                    onClick={() => close()}
                    lighttheme={isLightTheme}
                  >
                    <MdPlaylistAdd
                      color={isLightTheme ? '#000000' : '#ffffff'}
                      size="1.5rem"
                      style={{marginRight: '1rem', marginLeft: '0.5rem'}}
                    />
                    Saved Videos
                  </SidebarLink>
                  {/* Add other links here as needed */}
                  <LogoutBtn
                    onClick={() => {
                      onClickLogout()
                      close()
                    }}
                  >
                    Logout
                  </LogoutBtn>
                </SidebarMenu>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutBtn className="trigger-button" lighttheme={isLightTheme}>
                  Logout
                </LogoutBtn>
              }
            >
              {close => (
                <>
                  <PopupHolder>
                    <PopupText>Are you sure, you want to logout?</PopupText>
                    <ButtonsRow>
                      <CancelButton
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsRow>
                  </PopupHolder>
                </>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <SmIconHolder className="trigger-button">
                  <FiLogOut size="1.2rem" color={iconColor} />
                </SmIconHolder>
              }
            >
              {close => (
                <>
                  <PopupHolder>
                    <PopupText>Are you sure you want to logout?</PopupText>
                    <ButtonsRow>
                      <CancelButton
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ButtonsRow>
                  </PopupHolder>
                </>
              )}
            </Popup>
          </HeaderRightSection>
        </HeaderSection>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
