import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.lighttheme ? '#ffffff' : '#000000')};
`
export const NotFoundContent = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundImg = styled.img`
  height: 60%;
  width: 35%;
  @media (max-width: 768px) {
    height: 50%;
    width: 40%;
  }
`
export const NotFoundBoldText = styled.h5`
  font-family: 'Roboto';
  font-size: 1.7rem;
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`
export const NotFoundText = styled.p`
  font-family: 'Roboto';
  font-size: 1.5rem;
  color: ${props => (props.lighttheme ? '#64748b' : '#7e858e')};
  margin-top: 0px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
