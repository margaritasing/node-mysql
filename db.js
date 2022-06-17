const Sequelize = require('sequelize');

const FilmModel = require('./models/films');
const UserModel = require('./models/user');

const sequelize = new Sequelize('nsY6MVxofg','nsY6MVxofg','Ij4i5iQMax', {
    host: 'remotemysql.com',
    dialect:'mysql'
});

const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then(()=>{
    console.log('Tablas sincronizadas')
});

module.exports ={
    Film,
    User
};

