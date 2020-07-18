import express from 'express'
import authorization from '../authorization'
import { insertIfDoesNotExist, deleteIfExists } from '../dbUtils'
import expressSanitizer from 'express-sanitizer'
import { USER_RECIPES_FAVORITES } from '../constants'

const favorite = express.Router()

const tableName = USER_RECIPES_FAVORITES

favorite.put('/', (req, res) => {
  authorization(req, res, true)

  const userId = req.session.user.id
  const recipeId = expressSanitizer(req.body['recipe_id'])
  const object = { user_id: userId, recipe_id: recipeId }

  insertIfDoesNotExist(req, res)(tableName, object)
})

favorite.delete('/', (req, res) => {
  authorization(req, res, true)

  const userId = req.session.user.id
  const recipeId = expressSanitizer(req.body['recipe_id'])
  const object = { user_id: userId, recipe_id: recipeId }

  deleteIfExists(req, res)(tableName, object)
})

export default favorite
