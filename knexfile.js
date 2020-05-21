require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user: process.env.USERNAME,
      password: process.env.PASSWORD
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    }
  },

  testing: {
    client: 'pg',
    connection: {
      database: 'pgtesting',
      user: process.env.USERNAME,
      password: process.env.PASSWORD
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    }
  }

};
