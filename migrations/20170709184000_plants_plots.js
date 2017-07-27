
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants_plots', table => {
    table.increments();
    table.text('notes');
    table.text('plot_bed_id');
    table.integer('plant_id').unsigned().notNullable()
      .references('id').inTable('plants').onDelete('CASCADE');
    table.integer('bed_id').unsigned().notNullable().references('id').inTable('beds').onDelete('CASCADE');
    table.dateTime('plant_date');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants_plots');
};
