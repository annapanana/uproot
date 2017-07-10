
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plots', table => {
    table.increments();
    table.text('notes');
    table.integer('plot_bed_id').notNullable();
    table.integer('bed_id').unsigned().notNullable()
      .references('id').inTable('beds').onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plots');
};
