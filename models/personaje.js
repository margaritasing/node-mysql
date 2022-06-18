module.exports = (sequelize, type) =>{
    return sequelize.define('personaje', {
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
        edad:{
            type: type.INTEGER
        },
        peso:{
            type: type.INTEGER
        },
        director:{
            type: type.STRING
        },
        historia:{
            type: type.STRING
        },
       
    })
}