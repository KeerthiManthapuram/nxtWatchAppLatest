import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.lighttheme ? '#f9f9f9' : '#0f0f0f')};
`
export const SavedLeftRightHolder = styled.div`
  display: flex;
  flex-direction: row;
`
export const SavedRightSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
  }
`
export const SavedBoldText = styled.h4`
  font-family: 'Roboto';
  font-size: 1.5rem;
  margin-bottom: 0px;
  margin-top: 4px;
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
export const SavedThinText = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  margin-top: 5px;
  color: ${props => (props.lighttheme ? '#383838' : '#f8fafc')};
  @media (max-width: 576px) {
    font-size: 0.5rem;
    margin-top: 2px;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 5px;
  }
`
export const NoSavedVideosFoundView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: ${props => (props.lighttheme ? '#ffffff' : '#000000')};
`
export const NoSavedImage = styled.img`
  height: 40%;
  width: 36%;
`

export const SavedVideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  @media (max-width: 576px) {
    padding: 0px;
    margin: 0px;
  }
`
export const SavedRightSectionHeader = styled.div`
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
    padding: 1.5rem;
  }
  @media (max-width: 576px) {
    padding: 1rem;
  }
`
export const SavedIconHolder = styled.div`
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
export const SavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 2rem;
  font-weight: bold;
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`
