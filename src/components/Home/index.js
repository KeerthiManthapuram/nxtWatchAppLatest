import {Component} from 'react'

import 'reactjs-popup/dist/index.css'

import {IoIosClose} from 'react-icons/io'

import {GoSearch} from 'react-icons/go'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeBgContainer,
  LeftRightSection,
  RightSection,
  PremiumBannerContent,
  BannerHeader,
  NxtLogo,
  CloseBtn,
  BannerText,
  GetBtn,
  SearchBarHolder,
  SearchUserInput,
  SearchIconHolder,
} from './styledComponents'

import Header from '../Header'

import SideBar from '../SideBar'

import VideosSection from '../VideosSection'

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    searchQuery: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  closeBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  onClickSearchIcon = () => {
    const {searchInput} = this.state
    this.setState({
      searchQuery: searchInput,
    })
  }

  render() {
    const {showBanner, searchInput, searchQuery} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <HomeBgContainer data-testid="home" lighttheme={isLightTheme}>
              <Header />
              <LeftRightSection>
                <SideBar />
                <RightSection lighttheme={isLightTheme}>
                  {showBanner && (
                    <div className="popup-container">
                      <PremiumBannerContent data-testid="banner">
                        <BannerHeader>
                          <NxtLogo
                            alt="nxt watch logo"
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          />
                          <CloseBtn
                            data-testid="close"
                            onClick={() => this.closeBanner()}
                          >
                            <IoIosClose size="1.2rem" />
                          </CloseBtn>
                        </BannerHeader>
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <GetBtn>GET IT NOW</GetBtn>
                      </PremiumBannerContent>
                    </div>
                  )}

                  <SearchBarHolder>
                    <SearchUserInput
                      type="search"
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      value={searchInput}
                      lighttheme={isLightTheme}
                    />
                    <SearchIconHolder
                      lighttheme={isLightTheme}
                      data-testid="searchButton"
                      onClick={this.onClickSearchIcon}
                    >
                      <GoSearch
                        size="1rem"
                        color={isLightTheme ? '#616e7c' : '#424242'}
                      />
                    </SearchIconHolder>
                  </SearchBarHolder>
                  <VideosSection searchInput={searchQuery} />
                </RightSection>
              </LeftRightSection>
            </HomeBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
