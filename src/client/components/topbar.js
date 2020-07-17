import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import PrimaryButton from './PrimaryButton.js'
import { sizes, MAIN_MAX_WIDTH, TOPBAR_HEIGHT } from './constants'
import logoImage from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TopBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  height: ${TOPBAR_HEIGHT}px;
  display: flex;
  justify-content: center;
  z-index: 100;
`

const Content = styled.div`
  padding: ${sizes.big}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${MAIN_MAX_WIDTH}px;
  width: 100%;
`

const Logo = styled.img`
  height: 30px;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 4px;
`

const TopBar = (props) => (
  <TopBarWrapper>
    <Content>
      <Link to="/">
        <Logo src={logoImage} />
      </Link>
      <Link to="/login">
        <PrimaryButton>
          Login <StyledIcon icon={faArrowRight} />
        </PrimaryButton>
      </Link>
    </Content>
  </TopBarWrapper>
)

export default TopBar
