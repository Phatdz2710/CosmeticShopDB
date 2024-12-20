// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// filepath: /E:/Nam hoc 24-25/WP/CosmeticShopDB/cometic_shopdatabase/knexfile.js
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  production: {
    client: 'mssql',
    connection: {
      host: process.env.SQLSERVER_HOST,
      port: parseInt(process.env.SQLSERVER_PORT),
      user: process.env.SQLSERVER_USERNAME,
      password: process.env.SQLSERVER_PASSWORD,
      database: process.env.SQLSERVER_DATABASE,
      options: {
        trustServerCertificate: true // For self-signed certificates
      }
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};