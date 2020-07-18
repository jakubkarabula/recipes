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
  return dbConnection
    .select()
    .table(tableName)
    .where(where)
    .then((rows) => {
      if (rows.length > 0 && send) {
        return res.status(200).send({})
      }

      return dbConnection
        .table(tableName)
        .insert(object)
        .then(() => {
          if (send) {
            return res.status(201).send({})
          }
        })
        .catch((error) => res.status(500).send(error))
    })
    .catch((error) => res.status(500).send(error))
}

export const deleteIfExists = (req, res) => (tableName, where, send = true) => {
  return dbConnection
    .select()
    .table(tableName)
    .where(where)
    .then((rows) => {
      if (rows.length > 0) {
        return dbConnection
          .table(tableName)
          .where(where)
          .del()
          .then(() => {
            if (send) {
              return res.status(200).send({})
            }
          })
          .catch((error) => res.status(500).send(error))
      }

      return res.status(404).send({})
    })
    .catch((error) => res.status(500).send(error))
}

export const updateOrInsert = (req, res) => (
  tableName,
  where,
  object,
  send = true
) => {
  return dbConnection
    .select()
    .table(tableName)
    .where(where)
    .then((rows) => {
      if (rows.length > 0) {
        return dbConnection
          .select()
          .table(tableName)
          .where(where)
          .update(object)
          .then(() => {
            if (send) {
              return res.status(200).send({})
            }
          })
          .catch((error) => res.status(500).send(error))
      }

      return dbConnection
        .table(tableName)
        .insert(object)
        .then(() => {
          if (send) {
            return res.status(201).send({})
          }
        })
        .catch((error) => res.status(500).send(error))
    })
    .catch((error) => res.status(500).send(error))
}
