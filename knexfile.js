// Update with your config settings.

const databaseConfig = {
  client: 'postgresql',
  connection: {
    database: 'hellofresh_jakub',
    user:     'test',
    password: 'test'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

module.exports = {
  development: databaseConfig,
  staging: databaseConfig,
  production: databaseConfig 
};
