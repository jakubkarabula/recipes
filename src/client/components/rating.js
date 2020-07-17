import React, { useState } from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'
import { faStar as Star } from '@fortawesome/free-regular-svg-icons'
import { faStar as SolidStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getStarColor = (props) => {
  if (props.selected) {
    return pallette.main[100]
  }
  return '#838383'
}

const StarIcon = styled(FontAwesomeIcon)`
  margin-right: ${sizes.small}px;
  color ${getStarColor};
  cursor: pointer;
`

const RatingWrapper = styled.div`
  font-size: 14px;
  color: #838383;
`

const RatingStar = (props) => (
  <StarIcon {...props} icon={props.selected ? SolidStar : Star} />
)

const useRating = (rating) => {
  const [currentRating, setRating] = useState(rating)

  const saveRating = (value) => {
    setRating(value)
  }

  return [currentRating, saveRating]
}

const Rating = (props) => {
  const [currentRating, setRating] = useRating(props.rating || 0)
  const [ratingHover, setRatingHover] = useState(props.rating || 0)
  const ratingStars = []

  for (let index = 1; index <= 5; index++) {
    ratingStars.push(
      <RatingStar
        key={index}
        onClick={() => setRating(index)}
        selected={ratingHover ? index <= ratingHover : index <= currentRating}
        onMouseEnter={() => setRatingHover(index)}
      />
    )
  }

  return (
    <RatingWrapper onMouseLeave={() => setRatingHover(0)}>
      <span>Your rating: {ratingStars}</span>

      {props.averageRating && (
        <span>
          Average rating: {props.averageRating} <StarIcon icon={SolidStar} />
        </span>
      )}
    </RatingWrapper>
  )
}

export default Rating
