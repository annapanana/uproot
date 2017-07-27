
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('images').insert({
          image_url: '',
          image_description: '',
          plant_id: 1,
          plot_bed_id: 3,
          bed_id: 100
        })
      ]);
    });
};
