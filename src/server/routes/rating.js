import express from 'express'
import authorization from '../authorization'
import { insertIfDoesNotExist, deleteIfExists } from '../dbUtils'

const rating = express.Router()

const tableName = 'user_recipes_ratings'

rating.put('/', (req, res) => {
  authorization(req, res, true)

  const userId = req.session.user.id
  const recipeId = req.body['recipe_id']
  const ratingId = req.body['rating_id']
  const object = { user_id: userId, recipe_id: recipeId, rating_id: ratingId }

  insertIfDoesNotExist(req, res)(tableName, object)
})

rating.delete('/', (req, res) => {
  authorization(req, res, true)

  const userId = req.session.user.id
  const recipeId = req.body['recipe_id']
  const rating = req.body['rating']
  const object = { user_id: userId, recipe_id: recipeId, rating }

  deleteIfExists(req, res)(tableName, object)
})

export default rating
