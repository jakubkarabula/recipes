import express from 'express'
import dbConnection from '../dbConnection'
import favorite from './favorite'
import rating from './rating'
import authorization from '../authorization'

const recipes = express.Router()

recipes.get('/', (req, res) => {
  if (!authorization(req, res)) {
    const userId =  1 || req.session.user.id

    dbConnection
      .select()
      .table('recipes')
      .leftJoin('user_recipes_favorites', {
        'user_recipes_favorites.recipe_id' : 'recipes.id',
        'user_recipes_favorites.user_id': userId
      })
      .leftJoin('user_recipes_ratings', {
        'user_recipes_ratings.recipe_id': 'recipes.id',
        'user_recipes_ratings.user_id': userId
      })
      .leftJoin('average_recipes_ratings', {
        'average_recipes_ratings.recipe_id': 'recipes.id'
      })
      .then((recipes) => res.send(recipes))
  } else {
    dbConnection
      .select()
      .table('recipes')
      .then((recipes) => res.send(recipes))
  }
})

recipes.use('/favorite', favorite)
recipes.use('/rating', rating)

export default recipes
