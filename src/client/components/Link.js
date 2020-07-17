import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { pallette } from './constants'

const StyledLink = styled(RouterLink)`
  color: ${pallette.main[100]};
  text-decoration: none;

  &:hover {
    color: ${pallette.main[200]};
  }

  &:active {
    color: ${pallette.main[300]};
  }
`

const Link = (props) => <StyledLink {...props} />

export default Link
