import React from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'
import { faCalculator, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Rating from './rating'
import Favorite from './favorite'

const StyledPreviewCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
  max-width: 270px;
  width: 100%;
  float: left;
  margin-right: 20px;
  margin-bottom: 30px;
`

const PreviewImage = styled.img`
  border-radius: 3px;
  height: 170px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`

const Name = styled.span`
  font-size: 16px;
`

const SubText = styled.span`
  font-size: 14px;
  color: #838383;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 4px;
  color: #838383;
`

const PreviewCard = (props) => (
  <StyledPreviewCard key={props.key}>
    <PreviewImage src={props.image} />
    <Favorite id={props.id} favorite={props.favorite} />

    <Name>{props.name}</Name>
    <SubText>{props.headline}</SubText>
    <SubText>
      <StyledIcon icon={faCalculator} /> calories: {props.calories}
    </SubText>
    <SubText>
      <StyledIcon icon={faClock} /> time: {props.time}
    </SubText>

    <Rating {...props} />
  </StyledPreviewCard>
)

export default PreviewCard
