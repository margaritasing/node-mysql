const Pelicula = require('./pelicula');
const Personaje = require('./personaje');
const Serie = require('./serie');
const Genero = require('./genero');

//muchos a muchos 

/* Pelicula.associate = models => {
    Pelicula.belongsToMany(models.Personaje, { through: 'Pelicula_Personajes' })
}

Personaje.associate = models => {
    Personaje.belongsToMany(models.Pelicula, { through: 'Pelicula_Personajes' })
} */