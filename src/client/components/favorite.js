import React, { useState } from 'react'
import styled from 'styled-components'
import { pallette, sizes } from './constants'
import { faHeart as Heart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { favoriteRecipe, unfavoriteRecipe } from '../redux/actions'
import { connect } from 'react-redux'

const FavoriteIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: ${sizes.small}px;
  right: ${sizes.small}px;
  background: ${pallette.white};
  color: ${pallette.main[100]};
  padding: ${sizes.small}px;
  border-radius: ${sizes.imageBorderRadius}px;
  cursor: pointer;

  &:hover {
    color: ${pallette.main[200]};
  }
`

const useFavorite = (props) => {
  const [favorite, setFavorite] = useState(props.favorite || false)

  const updateFavorite = (favorite) => {
    if (!props.user.email) {
      return
    }

    if (favorite) {
      props.favoriteRecipe(props.id)
    } else {
      props.unfavoriteRecipe(props.id)
    }

    setFavorite(favorite)
  }

  return [favorite, updateFavorite]
}

const Favorite = (props) => {
  const [favorite, updateFavorite] = useFavorite(props)

  if (!props.user.email) {
    return <div />
  }

  return (
    <FavoriteIcon
      onClick={() => updateFavorite(!favorite)}
      icon={favorite ? SolidHeart : Heart}
    />
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  favoriteRecipe: (id) => dispatch(favoriteRecipe(id)),
  unfavoriteRecipe: (id) => dispatch(unfavoriteRecipe(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)
