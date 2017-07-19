
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beds', table => {
    table.increments();
    table.text('notes');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beds');
};
