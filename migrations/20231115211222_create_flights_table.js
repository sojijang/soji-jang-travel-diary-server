/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("flight", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("id").inTable("user");
    table.varchar("airline_name").notNullable();
    table.varchar("depature_location").notNullable();
    table.timestamp("departure_etd").notNullable();
    table.timestamp("departure_eta").notNullable();
    table.varchar("return_location").notNullable();
    table.timestamp("return_etd").notNullable();
    table.timestamp("return_eta").notNullable();
    table.varchar("budget").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("flight");
};
