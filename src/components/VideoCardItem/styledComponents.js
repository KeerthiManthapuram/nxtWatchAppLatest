import styled from 'styled-components'

export const VideoCardHolder = styled.li`
  display: flex;
  flex-direction: column;
  height: 42vh;
  width: 48%;
  background-color: ${props => (props.lighttheme ? '#f8fafc' : '#212121')};
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    margin-bottom: 1rem;
    width: 80%;
  }
`

export const VideoImg = styled.img`
  height: 70%;
  width: 100%;
`
export const ProfileDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  margin-top: 0.2rem;
`
export const ProfileImgHolder = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 15%;
`
export const ProfileImg = styled.img`
  height: 3rem;
  width: 3rem;
`
export const DetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;
  margin-left: 0.3rem;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 0.8rem;
  font-weight: bold;
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
  margin: 0px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  color: ${props => (props.lighttheme ? '#000000' : '#909090')};
  margin: 3px;
`

export const CardText = styled.p`
  font-family: 'Roboto';
  font-size: 0.8rem;
  color: ${props => (props.lighttheme ? '#000000' : '#909090')};
  margin-top: 6px;
`
