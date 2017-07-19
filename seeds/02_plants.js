
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('plants').insert({
          id: 0,
          plant_name: 'broccoli',
          plant_image_url: 'broccoli_icon.svg',
          area: 1,
          days_to_harvest: 50,
          harvest_info: '',
          family: 'Brassicaceae',
          notes: '',
          planting_info: 'Transplant into garden when seedlings have two sets of leaves. Frost-hardy. Plant a second broccoli crop eight weeks before first fall frost.'
        }),
        knex('plants').insert({
          id: 1,
          plant_name: 'carrot',
          plant_image_url: 'carrot_icon.svg',
          area: 1,
          days_to_harvest: 50,
          harvest_info: '',
          family: 'Brassicaceae',
          notes: '',
          planting_info: 'Transplant into garden when seedlings have two sets of leaves. Frost-hardy. Plant a second broccoli crop eight weeks before first fall frost.'
        })
      ]);
    });
};
