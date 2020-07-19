import React from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'

const StyledPrimaryButton = styled.button`
  background-color: ${pallette.main[100]};
  color: ${pallette.white};
  border: 0;
  padding: ${sizes.base}px ${sizes.big}px;
  font-weight: bold;
  border-radius: ${sizes.buttonRadius}px;
  cursor: pointer;

  &:hover {
    background-color: ${pallette.main[200]};
  }

  &:active {
    background-color: ${pallette.main[300]};
  }
`

const PrimaryButton = (props) => <StyledPrimaryButton {...props} />

export default PrimaryButton
