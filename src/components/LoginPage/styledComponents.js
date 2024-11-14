import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.lighttheme ? '#ffffff' : '#181818')};
`
export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 75vh;
  width: 35vw;
  box-shadow: ${props => (props.lighttheme ? '0px 0px 20px  #cccccc' : '')};
  background-color: ${props => (props.lighttheme ? '#f9f9f9' : '#000000')};
  border-radius: 1rem;

  @media (max-width: 576px) {
    height: 60vh;
    width: 80vw;
  }

  @media (max-width: 768px) {
    height: 70vh;
    width: 68vw;
  }
`
export const WebsiteLogo = styled.img`
  height: 4rem;
  width: 11rem;
  align-self: center;
  margin: 0.5rem;

  @media (max-width: 576px) {
    height: 3.5rem;
    width: 8rem;
  }

  @media (max-width: 768px) {
    height: 3.9rem;
    width: 9.8rem;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1rem;
  @media (max-width: 576px) {
    margin-top: 1rem;
    padding: 0.5rem;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0.7rem;
  }
`
export const FormLabel = styled.label`
  font-family: 'Roboto';
  font-size: 1rem;
  color: ${props => (props.lighttheme ? '#475569' : '#ffffff')};
  font-weight: bold;
  margin-bottom: 0.3rem;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9;
  }
`
export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 1rem;
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
  background-color: transparent;
  height: 2.7rem;
  width: 100%;
  border: #64748b 1px solid;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  @media (max-width: 576px){
    height: 2rem;
    width: 100%;
    font-size: 0.8rem;
  }
  @media (max-width: 768px){
    height: 2.3rem
    width: 100%;
    font-size: 0.9rem;
  }
`
export const PasswordCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  width: 100%;

  @media (max-width: 576px) {
    height: 2rem;
  }

  @media (max-width: 768px) {
    height: 2.4rem;
  }
`
export const Toggler = styled.input`
  height: 1.2rem;
  width: 1.2rem;
  @media (max-width: 576px) {
    height: 1rem;
    width: 1rem;
  }
`
export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 0.9rem;
  color: ${props => (props.lighttheme ? '#000000' : '#ffffff')};
  margin-right: 3rem;
  @media (max-width: 576px) {
    font-size: 0.4rem;
    margin-right: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-right: 1.5rem;
  }
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.4rem;
  height: 2.7rem;
  width: 100%;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  @media (max-width: 576px) {
    height: 2.4rem;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    height: 2.5rem;
    font-size: 1.1rem;
  }
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  margin-top: 0px;
  color: #ff0000;
  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`
