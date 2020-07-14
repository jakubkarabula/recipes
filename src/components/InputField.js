import React from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #d0d0d0;
  border-radius: 2px;
  width: calc(100% - 20px);
`

const InputLabel = styled.label`
  display: block;
  margin-bottom: ${sizes.small}px;
  color: #7d7d7d;
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
