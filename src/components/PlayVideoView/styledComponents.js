import styled from 'styled-components'

export const VideoDetailsHolder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: ${props => (props.lighttheme ? '#ffffff' : '#000000')};
`

export const VideoHeading = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 1.2rem;
  color: ${props => (props.lighttheme ? '#231f20' : '#f9f9f9')};
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    width: 100%;
  }
`
export const VideoCardText = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  color: ${props => (props.lighttheme ? '#616e7c' : '#7e858e')};
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0px;
  }
`
export const UserReactionsHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  @media (max-width: 768px) {
    margin-top: 0px;
    margin-left: 0px;
  }
`
export const IconText = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`
export const IconButton = styled.button`
  height: 4rem;
  min-width: 5.2rem;
  border: none;
  font-size: 0.9rem;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  margin-right: 0.3rem;
  color: ${props => props.color};
`

export const HorizontalRule = styled.hr`
  width: 100%;
  color: ${props => (props.lighttheme ? '#94a3b8' : '#313131')};
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
  }
`
export const VideoProfileChannelHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 15vh;
  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`
export const ProfileHolder = styled.div`
  display: flex;
  align-items: center
  margin-top: 0px;
  width: 5%;
`
export const ProfileImg = styled.img`
  height: 3rem;
  width: 3rem;
  @media (max-width: 768px) {
    height: 2.2rem;
    width: 2.2rem;
  }
`
export const VideoTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 93%;
    height: 2.2rem;
    padding: 0.5rem;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: bold;
  color: ${props => (props.lighttheme ? '#231f20' : '#f9f9f9')};
  margin-bottom: 0px;
  margin-top: 0px;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin: 0px;
  }
`
export const Description1 = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  margin-top: 0px;
  color: ${props => (props.lighttheme ? '#231f20' : '#f1f5f9')};
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 0px;
    display: none;
  }
`
export const Description2 = styled.p`
  font-family: 'Roboto';
  font-size: 0.8rem;
  margin-top: 0.4rem;
  color: ${props => (props.lighttheme ? '#231f20' : '#f1f5f9')};
  @media (min-width: 768px) {
    display: none;
  }
`
