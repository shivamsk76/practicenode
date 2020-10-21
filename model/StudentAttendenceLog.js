
const dbconfig = require('../config/config')
const Sequelize = require('sequelize')


 StudentAttendenceLog = dbconfig.define('StudentAttendenceLog',{
    
    
    RollNo: Sequelize.INTEGER,
    NoOfPresent: Sequelize.INTEGER,
    NoOfAbsent: Sequelize.INTEGER,
    NoOfLeaves: Sequelize.INTEGER,
    TotalDays: Sequelize.INTEGER,
},
{
tableName: "StudentAttendenceLog",
timestamps: false

})
Admission.removeAttribute('id')
module.exports = Admission