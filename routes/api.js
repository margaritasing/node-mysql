const router = require('express').Router();

const apiFilmRouter = require('./api/films');

router.use('/films', apiFilmRouter);


module.exports = router;
