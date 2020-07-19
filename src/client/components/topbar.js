import React, { useEffect } from 'react'
import styled from 'styled-components'
import Link from './Link'
import PrimaryButton from './PrimaryButton.js'
import { sizes, MAIN_MAX_WIDTH, TOPBAR_HEIGHT } from './constants'
import logoImage from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { logout, userDetails } from '../redux/actions'
import { connect } from 'react-redux'

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
  height: ${sizes.veryBig}px;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: ${sizes.small}px;
`

const handleLogout = (props) => async () => {
  await props.logout()
  props.getUserDetails()
}

const TopBar = (props) => {
  useEffect(() => {
    if (!props.user.loaded && !props.user.loading) {
      props.getUserDetails()
    }
  })

  return (
    <TopBarWrapper>
      <Content>
        <Link to="/">
          <Logo src={logoImage} />
        </Link>
        {props.user.email ? (
          <PrimaryButton onClick={handleLogout(props)}>Logout</PrimaryButton>
        ) : (
          <Link to="/login">
            <PrimaryButton>
              Login <StyledIcon icon={faArrowRight} />
            </PrimaryButton>
          </Link>
        )}
      </Content>
    </TopBarWrapper>
  )
}
const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getUserDetails: () => dispatch(userDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
