const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('plants')
    .then(results => {
      if (results.length === 0) {
        return res.send(404);
      }
      res.status(200).send(results)
    })
    .catch(error => {
      return next(error)
    })
})

router.post('/', (req, res, next) => {
  const {area, culture, days_to_harvest, direct_seeding_info, disease_pests, family, harvest_info, hybrid_status, id, notes, plant_icon, plant_image_url, plant_name, planting_info, scientific_name, transplanting_info, variety} = req.body;

  const plant = {
    area: !area ? 1.00 : parseFloat(area),
    culture: culture,
    days_to_harvest: !days_to_harvest ? 0 : parseInt(days_to_harvest),
    direct_seeding_info: direct_seeding_info,
    disease_pests: disease_pests,
    family: family,
    harvest_info: harvest_info,
    hybrid_status: hybrid_status,
    notes: notes,
    plant_icon: plant_icon,
    plant_image_url: plant_image_url,
    plant_name: plant_name,
    planting_info: planting_info,
    scientific_name: scientific_name,
    transplanting_info: transplanting_info,
    variety: variety
  }
  console.log("ID", id);

  if (id) {
    console.log("UPDATING");
    knex('plants')
      .where('id', id)
      .update(plant, '*')
      .then(updated_plant => {
        console.log("result", updated_plant);
        // SEND ALL PLANTS_LOADED
        knex('plants')
          .then(all_plants => {
            res.status(200).send(all_plants);
          })
      })
      .catch(err => {
        next(err);
      });
  } else {
    console.log("ADDING");
    knex('plants')
      .insert(plant)
      .then(inserted_plant => {
        knex('plants')
          .then(all_plants => {
            res.status(200).send(all_plants);
          })
      })
      .catch(err => {
        console.log(err);
        next(err);
      });
  }
})

module.exports = router;
