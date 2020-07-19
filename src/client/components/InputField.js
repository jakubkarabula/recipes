import React from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'

const StyledInput = styled.input`
  padding: ${sizes.base}px;
  border: ${pallette.border};
  border-radius: ${sizes.inputBorderRadius}px;
  width: calc(100% - ${2 * sizes.base}px);
`

const InputLabel = styled.label`
  display: block;
  margin-bottom: ${sizes.small}px;
  color: ${pallette.labelColor};
`

const InputWrapper = styled.div`
  width: 100%;
`

const InputField = (props) => (
  <InputWrapper>
    {props.label && <InputLabel for={props.name}>{props.label}</InputLabel>}

    <StyledInput {...props} />
  </InputWrapper>
)

export default InputField
