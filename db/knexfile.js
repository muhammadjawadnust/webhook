// Update with your config settings.
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
      max: 100,
      // afterCreate: function (conn, done) {
      // in this example we use pg driver's connection API
      // conn.query("SET time_zone = timezone;", function (err) {
      //   callback(err, connection);
      // });
      // conn.query('SET timezone="UTC";', function (err) {
      //   if (err) {
      //     // first query failed, return error and don't try to make next query
      //     done(err, conn);
      //   } else {
      //     // do the second query...
      //     conn.query("SELECT set_limit(0.01);", function (err) {
      //       // if err is not falsy, connection is discarded from pool
      //       // if connection aquire was triggered by a query the error is passed to query promise
      //       done(err, conn);
      //     });
      //   }
      // });
      // },
    },
    acquireConnectionTimeout: 10000,
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
