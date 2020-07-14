import React, { useState } from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'
import { faStar as Star } from '@fortawesome/free-regular-svg-icons'
import { faStar as SolidStar,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StarIcon = styled(FontAwesomeIcon)`
  margin-right: 4px;
  color ${(props) => props.selected ? pallette.main[100] : '#838383'};
  cursor: pointer;
`

const updateSelection = (currentRating, newRating) => {
  if (currentRating === newRating + 1) {
    return 0
  }

  return newRating + 1
}

const Rating = (props) => {
  const [currentRating, setSelected] = useState(props.rating || 0) 
  const ratingStars = []

  for (let index = 0; index < 5; index++) {
    ratingStars.push(
      <StarIcon 
        onClick={() => setSelected(updateSelection(currentRating, index))}
        selected={index < currentRating}
        icon={index < currentRating ? SolidStar : Star} 
      />
    )
  }

  return <div>{ratingStars}</div>
}

export default Rating
