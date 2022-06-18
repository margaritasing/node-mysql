module.exports = (sequelize, type) =>{
    return sequelize.define('serie', {
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        imagen:{
            type: type.STRING
        },
        titulo:{
            type: type.STRING
        },
        fechaDeCreacion:{
            type: type.INTEGER
        },
        calificacion:{
            type: type.INTEGER
        },
        
    })
}