import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.lighttheme ? '#f9f9f9' : '#0f0f0f')};
`
export const GamingLeftRightSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const GamingRightSection = styled.div`
  min-height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0px;
  background-color: ${props => (props.lighttheme ? '#f9f9f9' : '#181818')};
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const GamingRightSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 15vh;
  width: 100%;
  padding: 2rem;
  background-color: ${props => (props.lighttheme ? '#f1f5f9' : '#212121')};

  @media (max-width: 768px) {
    height: 14vh;
    width: 100%;
  }
`
export const GamingIconHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  border: none;
  border-radius: 50%;
  margin-right: 1.5rem;
  background-color: ${props => (props.lighttheme ? '#e2e8f0' : '#313131')};

  @media (max-width: 768px) {
    height: 3.4rem;
    width: 3.4rem;
    margin-right: 1rem;
  }
  @media (max-width: 567px) {
    height: 3rem;
    width: 3rem;
    margin-right: 0.8rem;
  }
`
export const GamingHeading = styled.h2`
  font-family: 'Roboto';
  font-size: 2.4rem;
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
export const GamingVideosHolder = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;
  height: auto;
  width: 100%;
  padding: 1rem;
`
export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const FailureImage = styled.img`
  height: 13rem;
  width: 17rem;
  @media (max-width: 768px) {
    height: 11rem;
    width: 15rem;
  }
`
export const FailureBoldText = styled.h3`
  font-family: 'Roboto';
  font-size: 1.3rem;
  color: ${props => (props.lighttheme ? '#000000' : '#f8fafc')};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
export const FailureText = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  margin-top: 0px;
  color: ${props => (props.lighttheme ? '#475569' : '#909090')};
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`
export const RetryBtn = styled.button`
  font-family: 'Roboto';
  font-size: 1.2rem;
  color: #ffffff;
  background-color: #3944bc;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  height: 2.5rem;
  min-width: 5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    height: 2.2rem;
    width: 5rem;
  }
`
export const LoadingView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 100%;
  background-color: transparent;
`
