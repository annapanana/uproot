// COPY plants (plant_name, variety, scientific_name, plant_icon, plant_image_url, area, days_to_harvest, harvest_info, family, notes, disease_pests, culture, transplanting_info, direct_seeding_info, hybrid_status) FROM '/Users/annalotko/workspace/uproot_project/plant_information.csv' DELIMITER ',' CSV HEADER;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('plants').insert({
          plant_name: '',
          variety: '',
          scientific_name: 0,
          plant_icon: 3,
          plant_image_url: 100
        })
      ]);
    });
};
