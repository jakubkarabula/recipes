import dbConnection from './dbConnection'

/*
 * as far as I know there is no ready to use function for inserting if item does not exists
 */
export const insertIfDoesNotExist = (req, res) => (tableName, object) => {
  dbConnection
    .select()
    .table(tableName)
    .where(object)
    .then((rows) => {
      if (rows.length > 0) {
        res.status(200)
      }

      dbConnection
        .table(tableName)
        .insert(object)
        .then(() => res.status(201))
        .catch((error) => res.status(500).send(error))
    })
    .catch((error) => res.status(500).send(error))
}

export const deleteIfExists = (req, res) => (tableName, object) => {
  dbConnection
    .select()
    .table(tableName)
    .where(object)
    .then((rows) => {
      if (rows.length > 0) {
        dbConnection
          .table(tableName)
          .del(object)
          .then(() => res.status(200))
          .catch((error) => res.status(500).send(error))
      }

      res.status(404)
    })
    .catch((error) => res.status(500).send(error))
}
