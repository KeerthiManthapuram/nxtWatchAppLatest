import styled from 'styled-components'

export const SidebarSection = styled.div`
  height: 91vh;
  width: 20%;
  background-color: ${props => (props.lighttheme ? '#ffffff' : '#0f0f0f')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.4rem;
  margin: 0px;
  position: sticky;
  top: 9vh;
  @media (max-width: 768px) {
    display: none;
  }
`

export const SectionsHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`
export const Section = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SectionName = styled.p`
    font-family: "Roboto",
    font-size: 1.3rem;
    width: 80%;
    color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
`
export const SectionIconHolder = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`
export const ContactText = styled.p`
    font-family: "Roboto",
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
`
export const ContactIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  height: 3rem;
`
export const IconImage = styled.img`
  height: 2rem;
  width: 2rem;
  margin-right: 0.5rem;
`
export const ContactEndText = styled.p`
    font-family: "Roboto",
    font-size: 1rem;
    font-weight: 500;
    width: 80%;
    color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
`
