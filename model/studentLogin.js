const dbconfig = require('../config/config')
const Sequelize = require('sequelize')
const Admission = require('./Admission')



StudentLogin = dbconfig.define('StudentLogin',{
    Emailid:{
        type:Sequelize.STRING,
        foreignKey: true
    },
    Password:{
        type:Sequelize.STRING
    }
},{
    tableName:'StudentLogin',
    timestamps:false
})
StudentLogin.removeAttribute('id')

StudentLogin.belongsTo(Admission,{ as:'StudentLoginInfo', foreignKey:'Emailid'})

module.exports = StudentLogin