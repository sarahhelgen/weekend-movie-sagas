const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

//get route to retrieve genre details with many to many join
router.get('/:id', (req, res) => {
  const queryString = `SELECT "genres".name, "movies".description FROM "movies_genres"
  JOIN "genres" ON "genres".id = "movies_genres".genre_id
  JOIN "movies" ON "movies".id = "movies_genres".movie_id
  WHERE "movies".id = ($1)`;
  pool.query(queryString, [req.params.id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('error in GET genre ', err);
      res.sendStatus(500)
    })

});


module.exports = router;