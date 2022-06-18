const Sequelize = require('sequelize');

const FilmModel = require('./models/films');
const UserModel = require('./models/user');
const PeliculaModel = require('./models/pelicula');
const GeneroModel = require('./models/genero');
const PersonajeModel = require('./models/personaje');
const SerieModel = require('./models/serie');
/* require('./models/asociations') */

const sequelize = new Sequelize('nsY6MVxofg','nsY6MVxofg','Ij4i5iQMax', {
    host: 'remotemysql.com',
    dialect:'mysql'
});

const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Personaje = PersonajeModel(sequelize, Sequelize);
const Serie = SerieModel(sequelize, Sequelize);
const Pelicula = PeliculaModel(sequelize, Sequelize);
const Genero = GeneroModel(sequelize, Sequelize)


//Creo la relacion de la tabla, personaje y pelicula 
Pelicula.belongsToMany(Personaje, { through: 'Pelicula_Personajes' })
Personaje.belongsToMany(Pelicula, { through: 'Pelicula_Personajes' })





sequelize.sync({force: false})
.then(()=>{
    console.log('Tablas sincronizadas')
});

module.exports ={
    Film,
    User, 
    Personaje,
    Serie,
    Genero,
    Pelicula,
  
};

