import styled from 'styled-components'
import { pallette, sizes } from './constants'

const Container = styled.div`
  padding: ${sizes.padding}px;
  box-shadow: ${pallette.topShadow};
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default Container
