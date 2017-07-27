
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', table => {
    table.increments();
    table.text('plant_name');
    table.text('variety');
    table.text('scientific_name');
    table.text('plant_icon');
    table.text('plant_image_url');
    table.decimal('area');
    table.integer('days_to_harvest');
    table.text('harvest_info');
    table.text('family');
    table.text('notes');
    table.text('disease_pests');
    table.text('culture');
    table.text('transplanting_info');
    table.text('direct_seeding_info');
    table.text('hybrid_status');
    table.text('planting_info');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants');
};
