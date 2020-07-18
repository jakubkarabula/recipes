import dbConnection from './dbConnection'

/*
 * As far as I know there are no ready to use functions for conditional
 * inserting, updating and deleting in knex.js
 */

export const insertIfDoesNotExist = (req, res, send = true) => (
  tableName,
  where,
  object
) => {
  dbConnection
    .select()
    .table(tableName)
    .where(where)
    .then((rows) => {
      if (rows.length > 0 && send) {
        res.status(200)
      }

      dbConnection
        .table(tableName)
        .insert(object)
        .then(() => {
          if (send) {
            res.status(201)
          }
        })
        .catch((error) => res.status(500).send(error))
    })
    .catch((error) => res.status(500).send(error))
}

export const deleteIfExists = (req, res) => (
  tableName,
  where,
  object,
  send = true
) => {
  dbConnection
    .select()
    .table(tableName)
    .where(where)
    .then((rows) => {
      if (rows.length > 0) {
        dbConnection
          .table(tableName)
          .del(object)
          .then(() => {
            if (send) {
              res.status(200)
            }
          })
          .catch((error) => res.status(500).send(error))
      }

      res.status(404)
    })
    .catch((error) => res.status(500).send(error))
}

export const updateOrInsert = (req, res) => (
  tableName,
  where,
  object,
  send = true
) => {
  dbConnection
    .select()
    .table(tableName)
    .where(where)
    .then((rows) => {
      if (rows.length > 0) {
        rows
          .update(object)
          .then(() => {
            if (send) {
              res.status(200)
            }
          })
          .catch((error) => res.status(500).send(error))
      }

      dbConnection
        .table(tableName)
        .insert(object)
        .then(() => {
          if (send) {
            res.status(201)
          }
        })
        .catch((error) => res.status(500).send(error))
    })
    .catch((error) => res.status(500).send(error))
}
