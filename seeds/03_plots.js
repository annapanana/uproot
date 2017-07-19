
exports.seed = function(knex, Promise) {
  let plots = [];
  for (var i = 100; i <= 600; i+=100) {
    for (var j = 0; j < 40; j++) {
      plots.push({
        bed_id: i,
        plot_bed_id: j,
        notes: ""
      })
    }
  }
  // Deletes ALL existing entries
  return knex('plots').del()
    .then(function () {
      // Inserts seed entries
      return knex.insert(plots).into('plots')
    });
};
