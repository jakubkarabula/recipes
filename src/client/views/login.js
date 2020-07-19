import React, { useEffect } from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Card from '../components/Card'
import InputField from '../components/InputField'
import PrimaryButton from '../components/PrimaryButton'
import Link from '../components/Link'
import { connect } from 'react-redux'
import { login } from '../redux/actions'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { pallette, sizes } from '../components/constants'

const Form = styled.form`
  max-width: 500px;
  padding: ${sizes.padding}px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;
`

const WelcomeText = styled.span`
  font-size: ${sizes.bigFont}px;
`

const ErrorText = styled.span`
  font-size: ${sizes.normalFont}px;
  color: ${pallette.error};
`

const handleSubmit = (props) => (event) => {
  event.preventDefault()
  const formData = Object.fromEntries(new FormData(event.target))

  props.logIn(formData.email, formData.password)
}

const Login = (props) => {
  useEffect(() => {
    if (props.user.email) {
      props.history.push('/')
    }
  })

  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit(props)}>
          <WelcomeText>Log in to your account</WelcomeText>

          <InputField type="email" label="Email *" name="email" id="email" />

          <InputField
            type="password"
            label="Password *"
            name="password"
            id="password"
          />

          {props.user.error && <ErrorText>{props.user.error}</ErrorText>}

          <PrimaryButton>Login</PrimaryButton>

          <Link to="/">Go back to recipies</Link>
        </Form>
      </Card>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  logIn: (email, password) => dispatch(login(email, password))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Login)
