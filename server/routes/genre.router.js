const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

//get route to retrieve genre details with many to many join
router.get('/:id', (req, res) => {
  const movieId = req.params.id;
  const queryText = `SELECT "genres"."name" from "genres"
  JOIN "movies_genres" ON "movies_genres"."genre_id"="genres"."id"
  JOIN "movies" ON "movies_genres"."movie_id" = "movies"."id" WHERE "movies"."id"=$1;`;
  pool.query(queryText, [movieId])
    .then(result => {
      res.send(result.rows);
    }).catch(error => {
      console.log('error getting genre details', error);
      res.sendStatus(500);
    });

});

module.exports = router;