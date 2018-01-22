const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.post('/', (req, res, next) => {
  const {plot_id, bed_id, plant_id} = req.body;
  const data = {
    bed_id: bed_id,
    plot_bed_id: plot_id,
    plant_id: plant_id
  }

  knex('plants_plots')
    .where('plot_bed_id', plot_id)
    .where('bed_id', bed_id)
    .first()
    .then((result) => {
        if (!result) {
          knex('plants_plots')
          .insert(data)
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
        } else {
          knex('plants_plots')
            .update(data, '*')
            .where('plot_bed_id', plot_id)
            .where('bed_id', bed_id)
            .then((result) => {
              res.status(200).send(result);
            })
            .catch(err => {
              next(err);
            });
        }
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

router.delete('/', (req, res, next) => {
  const {plot_id, bed_id} = req.body;
  knex('plants_plots')
    .where('plot_bed_id', plot_id)
    .where('bed_id', bed_id)
    .del()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      next(err);
    });
})

module.exports = router;
