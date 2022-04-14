/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.createTable("socketEvent", (table) => {
    table.increments("id");
    table.string("event_type").notNullable();
    table.string("message_Id").notNullable();
    table.string("msg_state").notNullable();
    table.string("subject").notNullable();
    table.string("email").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("socketEvent");
};
