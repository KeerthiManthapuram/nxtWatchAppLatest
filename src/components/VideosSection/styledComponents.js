import styled from 'styled-components'

export const VideosListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 100%;
  height: 100%;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 0px;
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
