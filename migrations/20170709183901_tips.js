
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tips', table => {
    table.increments();
    table.text('tip');
    table.integer('plant_id').unsigned().notNullable()
      .references('id').inTable('plants').onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tips');
};
