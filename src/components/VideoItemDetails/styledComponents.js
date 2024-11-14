import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lighttheme ? '#f9f9f9' : '#0f0f0f')};
`
export const VideoDetailsLeftRightSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const VideoDetailsRightSection = styled.div`
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
export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
