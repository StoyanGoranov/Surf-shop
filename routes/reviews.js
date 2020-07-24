const express = require('express');
const router = express.Router({mergeParams: true});

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
  res.send('INDEX /reviews');
});

//no NEW!

/* POST reviews create /posts/:id/reviews */
router.post('/', (req, res, next) => {
  res.send('CREATE /reviews');
});

/* GET reviews show /posts/:id/reviews/:review_id */
router.get('/:review_id', (req, res, next) => {
  res.send('SHOW /reviews');
});

/* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
  res.send('EDIT /reviews');
});

/* PUT reviews update /posts/:id/reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE /reviews');
});

/* DELETE reviews destroy /posts/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
  res.send('DESTROY /reviews');
});

module.exports = router;