
module.exports = (sequelize, type) =>{
    return sequelize.define('film', {
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type: type.STRING
        },
        description:{
            type: type.STRING
        },
        score:{
            type: type.INTEGER
        },
        director:{
            type: type.STRING
        }
    })
}