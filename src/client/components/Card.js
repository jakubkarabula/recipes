import React from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'

const StyledCard = styled.div`
  background-color: white;
  padding: ${sizes.big}px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`

const Card = (props) => <StyledCard {...props} />

export default Card
