import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const HeaderSection = styled.nav`
  height: 9vh;
  width: 100%;
  padding: 0.5rem;
  background-color: ${props => (props.lighttheme ? '#ffffff' : '#0f0f0f')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
`
export const Logo = styled.img`
  height: 2.2rem;
  width: 7.5rem;
`
export const HeaderRightSection = styled.div`
  height: 100%;
  width: 27%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
export const ThemeIconHolder = styled.button`
  height: 100%;
  width: 2rem;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
`
export const ProfileIconHolder = styled.div`
  height: 100%;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`
export const ProfileImg = styled.img`
  height: 1.3rem;
  width: 1.3rem;
`
export const LogoutBtn = styled.button`
  height: 2.3rem;
  min-width: 5rem;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 1rem;
  cursor: pointer;
  border-radius: 3px;
  color: ${props => (props.lighttheme ? '#3b82f6' : '#ffffff')};
  border: 2px solid ${props => (props.lighttheme ? '#3b82f6' : '#ffffff')};
  @media (max-width: 768px) {
    display: none;
  }
`
export const SmIconHolder = styled.button`
  height: 100%;
  width: 2rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  @media (min-width: 768px) {
    display: none;
  }
`
export const PopupHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 2rem;
  align-self: center;
`
export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  @media (max-width: 768px) {
    width: 70%;
  }
`
export const PopupText = styled.p`
  font-family: 'Roboto';
  font-size: 1.5rem;
  color: #4f46e5;
  text-align: center;
  font-weight: 500;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`
export const CancelButton = styled.button`
  height: 2.8rem;
  min-width: 5rem;
  font-size: 1.3rem;
  font-family: 'Roboto';
  cursor: pointer;
  border-radius: 10px;
  border: #64748b blur 2px;
  color: #64748b;
  background-color: transparent;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    height: 2.3rem;
    min-width: 3rem;
  }
  @media (max-width: 576px) {
    font-size: 0.6rem;
    height: 2rem;
    min-width: 3rem;
    margin-right: 3px;
  }
`

export const ConfirmButton = styled.button`
  height: 2.8rem;
  min-width: 5rem;
  font-size: 1.3rem;
  font-family: 'Roboto';
  cursor: pointer;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #ffffff;
  font-weight: bold;
  background-color: #3b82f6;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    height: 2.3rem;
    min-width: 3rem;
  }
  @media (max-width: 576px) {
    font-size: 0.6rem;
    height: 2rem;
    min-width: 3rem;
  }
`
export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.lighttheme ? '#f8fafc' : '#0f0f0f')};
  height: 30vh;
  width: 100%;
  padding: 1rem;
  align-self: center;
`

export const SidebarLink = styled(Link)`
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
  font-size: 1.2rem;
  line-height: 2rem;
  font-family: 'Roboto';
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background-color: ${props => (props.lighttheme ? '#d7dfe9' : '#313131')};
  }
`
