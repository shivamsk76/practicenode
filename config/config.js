const sequelize = require('sequelize')

module.exports = new sequelize('schooldb', 'admin', 'school123321',{
    host: 'schooldatabase.cxxyjhbxcreg.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})