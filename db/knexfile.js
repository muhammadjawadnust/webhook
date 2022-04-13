require("dotenv").config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3030,
      user: "admin",
      password: "admin123",
      database: "db",
    },
    pool: {
      min: 0,
      max: 10,
    },
    acquireConnectionTimeout: 10000,
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
