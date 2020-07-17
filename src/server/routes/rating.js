import express from 'express'
import dbConnection from '../dbConnection'
import authorization from '../authorization'

const rating = express.Router()

rating.put('/', (req, res) => {
  authorization(req, res, true)
})

rating.delete('/', (req, res) => {
  authorization(req, res, true)
})

export default rating
