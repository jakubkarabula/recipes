import React from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'
import { faStar as Star } from '@fortawesome/free-regular-svg-icons'
import { faStar as SolidStar, faCalculator, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledPreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
`

const PreviewImage = styled.img`
  border-radius: 3px;
  height: 170px;
  box-shadow: rgba(60,66,87,0.12) 0px 7px 14px 0px, rgba(0,0,0,0.12) 0px 3px 6px 0px;
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
`

const Rating = (props) => {
  const ratingStars = []

  console.log(props)
  for (let index = 0; index < 5; index++) {
    ratingStars.push(<StyledIcon icon={
      index < props.rating ? SolidStar : Star
    } />)
  }

  return <div>{ratingStars}</div>
}

const PreviewCard = (props) => (
  <StyledPreviewCard>
    <PreviewImage src={props.image} />

    <Name>{props.name}</Name>
    <SubText>{props.headline}</SubText>
    <SubText><StyledIcon icon={faCalculator}/> calories: {props.calories}</SubText>
    <SubText><StyledIcon icon={faClock}/> time: {props.time}</SubText>

    <Rating {...props} />  
  </StyledPreviewCard>
)

export default PreviewCard
