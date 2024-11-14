import styled from 'styled-components'

export const GamingCard = styled.li`
  height: 55vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 0.3rem;
  margin-bottom: 0.5rem;
  background-color: transparent;
  @media (max-width: 768px) {
    height: 50vh;
    width: 30%;
  }
  @media (max-width: 576px) {
    height: 45vh;
    width: 46%;
    margin: 6px;
  }
`

export const GamingImageHolder = styled.div`
  height: 77%;
  width: 100%;
  border: none;
  border-radius: 2rem;
  @media (max-width: 768px) {
    height: 70%;
    width: 100%;
  }
`
export const GamingImage = styled.img`
  height: 100%;
  width: 100%;
`
export const GamingCardTitle = styled.p`
  font-family: 'Roboto';
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0.5rem;
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`
export const GamingCardText = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  color: ${props => (props.lighttheme ? '#64748b' : '#94a3b8')};
  margin-top: 0px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`
