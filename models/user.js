module.exports = (sequelize, type) =>{
    return sequelize.define('user', {
        id:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username:{
            type: type.STRING
        },
        email:{
            type: type.STRING
        },
        password:{
            type: type.STRING(150)
        },
        
    })
}