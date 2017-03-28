// Update with your config settings.
const settings = require('./settings');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user     : 'settings.user',
      password : 'settings.password',
      database : 'settings.database',
      host     : 'settings.hostname',
      port     : 'settings.port',
      ssl      : 'settings.ssl'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'settings.database',
      user:     'settings.username',
      password: 'settings.password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'settings.database',
      user:     'settings.username',
      password: 'settings.password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
