/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("checklist_item", (table) => {
    table.increments("id").primary();
    table.integer("checklist_id").unsigned().notNullable();
    table.foreign("checklist_id").references("id").inTable("checklist");
    table.string("text").notNullable();
    table.boolean("checked").defaultTo(false);
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
  return knex.schema.dropTable("checklist_item");
};
