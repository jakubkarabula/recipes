import express from 'express'
import recipesRouter from './recipes.js'

const router = express.Router()

router.use('/recipes', recipesRouter)
// router.use('/users', recipesRouter)

export default router
