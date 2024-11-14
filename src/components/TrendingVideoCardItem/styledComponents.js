import styled from 'styled-components'

export const TrendingCard = styled.li`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`
export const TrendingImage = styled.img`
  height: 100%;
  width: 45%;
  @media (max-width: 768px) {
    height: 100%;
    width: 55%;
  }
  @media (max-width: 576px) {
    height: 70%;
    width: 100%;
  }
`
export const ProfileTextSection = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 576px) {
    margin-top: 0.5rem;
  }
`

export const ProfileHolder = styled.div`
  display: none;
  @media (max-width: 576px) {
    height: 100%;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const ProfileTrendingImage = styled.img`
  height: 2.7rem;
  width: 2.7rem;
`
export const TrendingTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  @media (max-width: 768px) {
    margin-left: 0.6rem;
  }
`

export const TrendingCardTitle = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 1.4rem;
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-top: 0px;
  }
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`
export const ChannelViewsYears = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 576px){
        display: flex;
        flex-direction: row;
        min-width: 70%;
        max-width: 82%
        height: 3rem;
        align-items: flex-start;
        margin-top: 0;
    }
`

export const TrendingChannelText = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  margin: 0px;
  color: ${props => (props.lighttheme ? '#231f20' : '#cbd5e1')};

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`
export const TrendingText = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  color: ${props => (props.lighttheme ? '#231f20' : '#cbd5e1')};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-left: 0.4rem;
    margin-top: 0.5rem;
  }
`
