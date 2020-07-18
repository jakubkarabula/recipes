import express from 'express'
import authorization from '../authorization'
import { updateOrInsert, deleteIfExists } from '../dbUtils'
import expressSanitizer from 'express-sanitizer'
import dbConnection from '../dbConnection'
import { USER_RECIPES_RATINGS, AVERAGE_RECIPES_RATINGS } from '../constants'

const rating = express.Router()

const tableName = USER_RECIPES_RATINGS

rating.put('/', (req, res) => {
  authorization(req, res, true)

  const userId = req.session.user.id
  const recipeId = expressSanitizer(req.body['recipe_id'])
  const ratingId = expressSanitizer(req.body['rating_id'])
  const where = { user_id: userId, recipe_id: recipeId }
  const object = { user_id: userId, recipe_id: recipeId, rating_id: ratingId }

  updateOrInsert(req, res)(tableName, where, object, false)

  dbConnection
    .table(AVERAGE_RECIPES_RATINGS)
    .where({ recipe_id: recipeId })
    .avg('average_rating')
    .then((ratings) => {
      if (ratings.length > 0) {
        updateOrInsert(
          AVERAGE_RECIPES_RATINGS,
          { recipe_id: recipeId },
          { average_rating: ratings[0].average_rating }
        )
      }
      res.status(404).send('recipe not found')
    })
    .catch((error) => res.status(500).send(error))
})

rating.delete('/', (req, res) => {
  authorization(req, res, true)

  const userId = req.session.user.id
  const recipeId = expressSanitizer(req.body['recipe_id'])
  const object = { user_id: userId, recipe_id: recipeId }

  deleteIfExists(req, res)(tableName, object, object)
})

export default rating
