const router = require('express').Router();
const middleware = require('./middleware')

const apiFilmRouter = require('./api/films');
const apiUserRouter = require('./api/users');

router.use('/films', middleware.checkToken , apiFilmRouter);
router.use('/users', apiUserRouter);


module.exports = router;
