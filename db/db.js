const knex = require("knex");
const knexfile = require("./knexfile");

//Please read below comments
//TODO in prod, use dependency injection
//to create knex instance so db can be mocked
//for tests

//TODO in prod dont access knexfile.development directly
//but decide with env vars which config to use
const db = knex(knexfile.development);
module.exports = db;
