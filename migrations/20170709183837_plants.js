
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', table => {
    table.increments();
    table.text('plant_name');
    table.text('plant_image_url');
    table.integer('area');
    table.integer('days_to_harvest');
    table.text('harvest_information');
    table.text('family');
    table.text('notes');
    table.text('planting_info')
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants');
};
