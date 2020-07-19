import React, { useState } from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'
import { faStar as Star } from '@fortawesome/free-regular-svg-icons'
import { faStar as SolidStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setRating, deleteRating } from '../redux/actions'
import { connect } from 'react-redux'

const getStarColor = (props) => {
  if (props.selected) {
    return pallette.main[100]
  }
  return pallette.labelColor
}

const StarIcon = styled(FontAwesomeIcon)`
  margin-right: ${sizes.small}px;
  color ${getStarColor};
  cursor: pointer;
`

const RatingWrapper = styled.div`
  font-size: ${sizes.smallFont}px;
  color: ${pallette.labelColor};
  display: flex;
  flex-direction: column;
  height: ${sizes.veryBig}px;
  justify-content: space-between;
`

const RatingStar = (props) => (
  <StarIcon {...props} icon={props.selected ? SolidStar : Star} />
)

const useRating = (rating, props) => {
  const [currentRating, setRating] = useState(rating)

  const saveRating = (value) => {
    if (!props.user.email) {
      return
    }

    if (currentRating === value) {
      props.deleteRating(props.id)
      setRating(0)
    } else {
      props.setRating(props.id, value)
      setRating(value)
    }
  }

  return [currentRating, saveRating]
}

export const Rating = (props) => {
  const [currentRating, setRating] = useRating(props.rating || 0, props)
  const [ratingHover, setRatingHover] = useState(props.rating || 0)
  const ratingStars = []

  for (let index = 1; index <= 5; index++) {
    ratingStars.push(
      <RatingStar
        key={index}
        id={`rating-${props.id}-${index}-${index <= currentRating}`}
        onClick={() => setRating(index)}
        selected={ratingHover ? index <= ratingHover : index <= currentRating}
        onMouseEnter={() => setRatingHover(index)}
      />
    )
  }

  return (
    <RatingWrapper onMouseLeave={() => setRatingHover(0)}>
      {props.user.email && <span>Your rating: {ratingStars}</span>}
      {props.averageRating > 0 && (
        <span id={`average-rating-${props.id}`}>
          Average rating: {props.averageRating} <StarIcon icon={SolidStar} />
        </span>
      )}
    </RatingWrapper>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  setRating: (id, rating) => dispatch(setRating(id, rating)),
  deleteRating: (id) => dispatch(deleteRating(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Rating)
