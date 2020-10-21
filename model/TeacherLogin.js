const dbconfig = require('../config/config')
const Sequelize = require('sequelize')
const TeacherAdmission = require('./TeacherAdmission')



TeacherLogin = dbconfig.define('TeacherLogin',{
    Emailid:{
        type:Sequelize.STRING,
        foreignKey: true
    },
    Password:{
        type:Sequelize.STRING
    }
},{
    tableName:'TeacherLogin',
    timestamps:false
})
StudentLogin.removeAttribute('id')

TeacherLogin.belongsTo(TeacherAdmission,{ as:'TeacherLoginInfo', foreignKey:'Emailid'})

module.exports = TeacherLogin