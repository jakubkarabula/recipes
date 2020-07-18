import express from 'express'
import authorization from '../authorization'
import { updateOrInsert, deleteIfExists } from '../dbUtils'
import dbConnection from '../dbConnection'
import { USER_RECIPES_RATINGS, AVERAGE_RECIPES_RATINGS } from '../constants'

const rating = express.Router()

const tableName = USER_RECIPES_RATINGS

rating.put('/', async (req, res) => {
  authorization(req, res, true)

  const userId = req.session.user.id
  const recipeId = +req.sanitize(req.body['recipe_id'])
  const rating = +req.sanitize(req.body['rating'])
  const where = { user_id: userId, recipe_id: recipeId }
  const object = { user_id: userId, recipe_id: recipeId, rating }

  await updateOrInsert(req, res)(tableName, where, object, false)

  dbConnection
    .table(USER_RECIPES_RATINGS)
    .where({ recipe_id: recipeId })
    .avg('rating')
    .then((ratings) => {
      if (ratings.length > 0) {
        return updateOrInsert(req, res)(
          AVERAGE_RECIPES_RATINGS,
          { recipe_id: recipeId },
          { recipe_id: recipeId, average_rating: +ratings[0].avg }
        )
      }
      res.status(404).send('recipe not found')
    })
    .catch((error) => res.status(500).send(error))
})

rating.delete('/', (req, res) => {
  authorization(req, res, true)

  const userId = req.session.user.id
  const recipeId = +req.sanitize(req.body['recipe_id'])
  const object = { user_id: userId, recipe_id: recipeId }

  deleteIfExists(req, res)(tableName, object, object)
})

export default rating
