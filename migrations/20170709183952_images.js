
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', table => {
    table.increments();
    table.text('image_url');
    table.text('image_description');
    table.integer('plant_id').unsigned().references('id').inTable('plants').onDelete('CASCADE');
    table.integer('plot_id').unsigned().references('id').inTable('plants').onDelete('CASCADE');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
