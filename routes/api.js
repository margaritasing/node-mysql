const router = require('express').Router();

const apiFilmRouter = require('./api/films');
const apiUserRouter = require('./api/users');

router.use('/films', apiFilmRouter);
router.use('/users', apiUserRouter);


module.exports = router;
