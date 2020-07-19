import React, { useEffect } from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import PreviewCard from '../components/PreviewCard'
import { devices } from '../components/constants'
import { connect } from 'react-redux'
import { getRecipes } from '../redux/actions'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

const RecipesGrid = styled.div`
  max-width: 270px;

  @media (min-width: ${devices.tablet}) {
    max-width: 572px;
  }

  @media (min-width: ${devices.laptop}) {
    max-width: 858px;
  }
`

const Overview = (props) => {
  useEffect(() => {
    if (!props.recipes.loaded && !props.recipes.loading) {
      props.getRecipes()
    }
  })

  return (
    <Container>
      <RecipesGrid>
        {props.recipes.data.map((recipe) => (
          <PreviewCard
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            headline={recipe.headline}
            image={recipe.image}
            calories={recipe.calories}
            time={recipe.time}
            rating={recipe.rating}
            averageRating={recipe.average_rating}
            favorite={recipe.favorite}
          />
        ))}
      </RecipesGrid>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  recipes: state.recipes
})

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipes())
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Overview)
