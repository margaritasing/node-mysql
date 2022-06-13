const Sequelize = require('sequelize')

const FilmModel = require('./models/films')

const sequelize = new Sequelize('node','root','123456', {
    host: '127.0.0.1',
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

