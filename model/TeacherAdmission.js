
const dbconfig = require('../config/config')
const Sequelize = require('sequelize')


 TeacherAdmission = dbconfig.define('TeacherAdmission',{
    
    EnrollmentID:{ 
        type:Sequelize.STRING
       
    },
    Firstname: Sequelize.STRING,
    Lastname: Sequelize.STRING,
    DoB: Sequelize.STRING,
    Sex: Sequelize.STRING,
    Fathername: Sequelize.STRING,
    Mothername: Sequelize.STRING,
    
    Mobile: Sequelize.STRING,
    Emailid:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    Address :Sequelize.TEXT,
    Subject :Sequelize.TEXT,
    Password:Sequelize.STRING,
},
{
tableName: "TeacherAdmission",
timestamps: false

})
Admission.removeAttribute('id')
module.exports = TeacherAdmission