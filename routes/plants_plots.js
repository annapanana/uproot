const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.post('/', (req, res, next) => {
  const {plot_id, bed_id, plant_id} = req.body;
  knex('plants_plots')
    .insert(
      {
        plot_bed_id: plot_id,
        bed_id: bed_id,
        plant_id: plant_id
      }
    )
    .then(result => {
      knex('plants_plots')
        .then(plantsResults => {
          res.status(200).send(plantsResults);
        })
        .catch(err => {
          next(err);
        });
    })
    .catch(err => {
      next(err);
    });
})

router.get('/', (req, res, next) => {
  knex('plants_plots')
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



module.exports = router;
