import express from 'express'
import recipesRouter from './recipes'
import userRouter from './user'

const router = express.Router()

router.use('/recipes', recipesRouter)
router.use('/user', userRouter)

export default router
