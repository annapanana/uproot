
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tips').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('tips').insert({
          tip: '',
          plant_id: 0
        })
      ]);
    });
};
