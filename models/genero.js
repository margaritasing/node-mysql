module.exports = (sequelize, type) =>{
    return sequelize.define('genero', {
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        imagen:{
            type: type.STRING
        },
        nombre:{
            type: type.STRING
        },
       
    })
}