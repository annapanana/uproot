
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants_plots').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('plants_plots').insert({
          notes: '',
          plot_bed_id: "2_0",
          plant_id: 1,
          bed_id: 100
        })
      ]);
    });
};
