import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.lighttheme ? '#f9f9f9' : '#181818')};
`
export const LeftRightSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const RightSection = styled.div`
  height: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0px;
  background-color: ${props => (props.lighttheme ? '#f9f9f9' : '#181818')};
  @media (max-width: 768px) {
    width: 100vw;
    height: auto;
  }
`
export const PremiumBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 2rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media (max-width: 576px) {
    padding: 0.7rem;
  }
`
export const BannerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  @media (max-width: 768px) {
    height: 3rem;
  }
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 1.3rem;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`
export const NxtLogo = styled.img`
  height: 2.2rem;
  width: 9rem;
  @media (max-width: 768px) {
    height: 1.7rem;
    width: 5.5rem;
  }
  @media (max-width: 576px) {
    height: 1.5rem;
    width: 4.5rem;
  }
`

export const CloseBtn = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const GetBtn = styled.button`
  height: 3.2rem;
  width: 7rem;
  background-color: transparent;
  border: 2px solid #313131;
  color: #313131;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 1.1rem;
  @media (max-width: 768px) {
    height: 2.7rem;
    width: 6rem;
    font-size: 0.9rem;
  }
  @media (max-width: 576px) {
    height: 2.5rem;
    width: 5.8rem;
    font-size: 0.7rem;
  }
`
export const SearchBarHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 2.5rem;
  width: 60%;
  margin-left: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    height: 2.7rem;
    width: 70%;
  }
  @media (max-width: 576px) {
    height: 2.5rem;
    width: 80%;
  }
`
export const SearchUserInput = styled.input`
  height: 100%;
  width: 87%;
  color: ${props => (props.lighttheme ? '#1e293b' : '#f1f1f1')};
  border: 2px solid ${props => (props.lighttheme ? '#cccccc' : '#424242')};
  font-family: 'Roboto';
  font-size: 1rem;
  background-color: transparent;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`
export const SearchIconHolder = styled.button`
  height: 100%;
  width: 13%;
  border: 2px solid ${props => (props.lighttheme ? '#cccccc' : '#424242')};
  background-color: transparent;
`
