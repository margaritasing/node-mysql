const router = require('express').Router();
const middleware = require('./middleware')

const apiFilmRouter = require('./api/films');
const apiUserRouter = require('./api/users');
const apiPersonajeRouter = require('./api/personaje');
const apiPeliculaRouter = require('./api/pelicula');

router.use('/films', middleware.checkToken , apiFilmRouter);
router.use('/users', apiUserRouter);
router.use('/personajes',middleware.checkToken,apiPersonajeRouter);
router.use('/peliculas', middleware.checkToken, apiPeliculaRouter);


module.exports = router;
