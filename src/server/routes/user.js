import express from 'express'
import authorization from '../authorization'
import dbConnection from '../dbConnection'
import { USERS } from '../constants.js'

const user = express.Router()

const tableName = USERS

user.get('/', (req, res) => {
  if (req.session.user) {
    return res.status(200).send(req.session.user)
  }

  res.status(401)
})

user.post('/login', (req, res) => {
  const email = req.sanitize(req.body['email'])
  const password = req.sanitize(req.body['password'])

  dbConnection
    .select(`${USERS}.email`, `${USERS}.id`)
    .table(tableName)
    .where({ email, password })
    .then((users) => {
      if (users.length === 1) {
        req.session.user = users[0]
        return res.status(200).send(req.session.user)
      }
      res.status(404).send({ error: 'failed to sign in' })
    })
    .catch((error) => res.status(500).send(error))
})

user.get('/logout', (req, res) => {
  authorization(req, res, true)

  req.session.destroy(function (error) {
    if (error) {
      return res.status(500).send(error)
    }
    res.status(200)
  })
})

export default user
