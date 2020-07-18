import express from 'express'
import dbConnection from '../dbConnection'
import favorite from './favorite'
import rating from './rating'
import authorization from '../authorization'
import {
  RECIPES,
  USER_RECIPES_RATINGS,
  USER_RECIPES_FAVORITES,
  AVERAGE_RECIPES_RATINGS
} from '../constants'

const recipes = express.Router()

recipes.get('/', (req, res) => {
  if (!authorization(req, res)) {
    const userId = 1 || req.session.user.id

    dbConnection
      .select(
        `${RECIPES}.*`,
        `${AVERAGE_RECIPES_RATINGS}.average_rating`,
        `${USER_RECIPES_RATINGS}.rating`,
        `${USER_RECIPES_FAVORITES}.user_id as favorite`
      )
      .table(RECIPES)
      .leftJoin(USER_RECIPES_FAVORITES, {
        [`${USER_RECIPES_FAVORITES}.recipe_id`]: `${RECIPES}.id`,
        [`${USER_RECIPES_FAVORITES}.user_id`]: userId
      })
      .leftJoin(USER_RECIPES_RATINGS, {
        [`${USER_RECIPES_RATINGS}.recipe_id`]: `${RECIPES}.id`,
        [`${USER_RECIPES_RATINGS}.user_id`]: userId
      })
      .leftJoin(AVERAGE_RECIPES_RATINGS, {
        [`${AVERAGE_RECIPES_RATINGS}.recipe_id`]: `${RECIPES}.id`
      })
      .then((recipes) => res.send(recipes))
      .catch((error) => res.status(500).send(error))
  } else {
    dbConnection
      .select(`${RECIPES}.*`, `${AVERAGE_RECIPES_RATINGS}.average_rating`)
      .table(RECIPES)
      .leftJoin(AVERAGE_RECIPES_RATINGS, {
        [`${AVERAGE_RECIPES_RATINGS}.recipe_id`]: `${RECIPES}.id`
      })
      .then((recipes) => res.send(recipes))
      .catch((error) => res.status(500).send(error))
  }
})

recipes.use('/favorite', favorite)
recipes.use('/rating', rating)

export default recipes
