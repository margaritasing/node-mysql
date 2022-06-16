const Sequelize = require('sequelize')

const FilmModel = require('./models/films')

const sequelize = new Sequelize('nsY6MVxofg','nsY6MVxofg','Ij4i5iQMax', {
    host: 'remotemysql.com',
    dialect:'mysql'
});

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then(()=>{
    console.log('Tablas sincronizadas')
})

module.exports ={
    Film
}

