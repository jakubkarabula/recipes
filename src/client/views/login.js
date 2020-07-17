import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '../components/container'
import { sizes, MAIN_MAX_WIDTH } from '../components/constants'
import Card from '../components/Card'
import InputField from '../components/InputField'
import PrimaryButton from '../components/PrimaryButton'
import Link from '../components/Link'

const Form = styled.form`
  max-width: 500px;
  padding: 30px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;
`

const WelcomeText = styled.span`
  font-size: 18px;
`

const Login = (props) => {
  return (
    <Container>
      <Card>
        <Form>
          <WelcomeText>Log in to your account</WelcomeText>

          <InputField type="email" label="Email *" name="email" id="email" />

          <InputField
            type="password"
            label="Password *"
            name="password"
            id="password"
          />

          <PrimaryButton>Login</PrimaryButton>

          <Link to="/">Go back to recipies</Link>
        </Form>
      </Card>
    </Container>
  )
}
export default Login
