import express from 'express'
import dbConnection from '../dbConnection'
import authorization from '../authorization'

const favorite = express.Router()

favorite.put('/:id', (req, res) => {
  authorization(req, res, true)
})

favorite.delete('/:id', (req, res) => {
  authorization(req, res, true)
})

export default favorite
