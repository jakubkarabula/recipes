import React from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'

const StyledCard = styled.div`
  background-color: ${pallette.white};
  padding: ${sizes.big}px;
  box-shadow: ${pallette.boxShadow};
`

const Card = (props) => <StyledCard {...props} />

export default Card
