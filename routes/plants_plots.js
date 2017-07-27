const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  console.log("getting plants plots");
  knex('plants_plots')
    .then(results => {
      if (results.length === 0) {
        return res.send(404);
      }
      console.log(results);
      res.status(200).send(results)
    })
    .catch(error => {
      return next(error)
    })
})

module.exports = router;
