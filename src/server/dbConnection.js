import knex from 'knex'
import configs from '../../knexfile'

const config = configs[process.env.NODE_ENV || 'development']
const dbConnection = knex(config)

export default dbConnection
