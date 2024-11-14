import styled from 'styled-components'

export const SavedVideoItem = styled.li`
  height: 35vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 1.5rem;
  @media (max-width: 768px) {
    height: 30vh;
    width: 100%;
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    height: 40vh;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0px;
    margin-right: 0px;
  }
`
export const ThumbnailHolder = styled.div`
  height: 100%;
  width: 65%;
  margin-right: 0.5rem;
  @media (max-width: 768px) {
    height: 100%;
    width: 55%;
  }
  @media (max-width: 576px) {
    height: 65%;
    width: 100%;
  }
`

export const SavedThumbnailImg = styled.img`
  height: 100%;
  width: 100%;
`
export const SavedProfileTextHolder = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 34%;
  @media (max-width: 768px) {
    height: 100%;
    width: 43%;
  }
  @media (max-width: 576px) {
    height: 35%;
    width: 100%;
  }
`
export const SavedProfile = styled.img`
  height: 2.8rem;
  width: 2.8rem;
  margin-right: 0.5rem;

  @media (min-width: 576px) {
    display: none;
  }
`

export const SavedVideoTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  margin-top: 0px;
  padding: 0.5rem;
  @media (max-width: 768px) {
    height: 100%;
    width: 90%;
  }
  @media (max-width: 576px) {
    height: 100%;
    width: 90%;
    padding: 0.2rem;
  }
`
export const SavedVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
  margin-bottom: 1rem;
  margin-top: 0px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-bottom: 0px;
  }
`
export const SavedVideoText = styled.p`
  font-family: 'Roboto';
  font-size: 1.2rem;
  color: ${props => (props.lighttheme ? '#383838' : '#94a3b8')};
  margin-top: 0px;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`
