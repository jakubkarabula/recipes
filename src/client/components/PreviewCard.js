import React from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'
import { faCalculator, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Rating from './Rating'
import Favorite from './Favorite'

const StyledPreviewCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
  max-width: 270px;
  width: 100%;
  float: left;
  margin-right: ${sizes.big}px;
  margin-bottom: ${sizes.padding}px;
`

const PreviewImage = styled.img`
  border-radius: ${sizes.imageBorderRadius}px;
  height: 170px;
  box-shadow: ${pallette.cardShadow};
`

const Name = styled.span`
  font-size: ${sizes.normalFont}px;
`

const SubText = styled.span`
  font-size: ${sizes.smallFont}px;
  color: ${pallette.labelColor};
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: ${sizes.small}px;
  color: ${pallette.labelColor};
`

const PreviewCard = (props) => (
  <StyledPreviewCard>
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
