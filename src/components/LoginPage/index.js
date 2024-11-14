import {Component} from 'react'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginBgContainer,
  LoginCard,
  WebsiteLogo,
  LoginForm,
  FormLabel,
  UserInput,
  PasswordCheckbox,
  Toggler,
  CheckboxLabel,
  LoginBtn,
  ErrorMessage,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      errorMessage: errorMsg,
    })
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isLightTheme} = value
          const {username, password, showPassword, errorMessage} = this.state
          const jwtToken = Cookies.get('jwt_token')
          console.log(jwtToken)
          const logoUrl = isLightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <LoginBgContainer lighttheme={isLightTheme}>
              <LoginCard lighttheme={isLightTheme}>
                <WebsiteLogo src={logoUrl} alt="website logo" />
                <LoginForm onSubmit={this.onSubmit}>
                  <FormLabel htmlFor="username" lighttheme={isLightTheme}>
                    USERNAME
                  </FormLabel>
                  <UserInput
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.onChangeUsername}
                    lighttheme={isLightTheme}
                  />
                  <FormLabel htmlFor="password" lighttheme={isLightTheme}>
                    PASSWORD
                  </FormLabel>
                  <UserInput
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.onChangePassword}
                    lighttheme={isLightTheme}
                  />
                  <PasswordCheckbox>
                    <Toggler
                      type="checkbox"
                      checked={showPassword}
                      onChange={this.onToggleShowPassword}
                    />
                    <CheckboxLabel htmlFor="checkbox" lighttheme={isLightTheme}>
                      Show Password
                    </CheckboxLabel>
                  </PasswordCheckbox>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {errorMessage !== '' && (
                    <ErrorMessage>*{errorMessage}</ErrorMessage>
                  )}
                </LoginForm>
              </LoginCard>
            </LoginBgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginPage
