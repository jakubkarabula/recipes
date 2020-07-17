import React, { useState } from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'
import { faHeart as Heart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FavoriteIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 4px;
  right: 4px;
  background: white;
  color: ${pallette.main[100]};
  padding: 4px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    color: ${pallette.main[200]};
  }
`

const updateSelection = (currentRating, newRating) => {
  if (currentRating === newRating + 1) {
    return 0
  }

  return newRating + 1
}

const Rating = (props) => {
  const [favorite, setFavorite] = useState(props.favorite || false)
  const ratingStars = []

  return (
    <FavoriteIcon
      onClick={() => setFavorite(!favorite)}
      icon={favorite ? SolidHeart : Heart}
    />
  )
}

export default Rating
