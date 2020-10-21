
const dbconfig = require('../config/config')
const Sequelize = require('sequelize')



 Admission = dbconfig.define('Admission',{
    
    
    Firstname: Sequelize.STRING,
    Lastname: Sequelize.STRING,
    DoB: Sequelize.STRING,
    Sex: Sequelize.STRING,
    Fathername: Sequelize.STRING,
    Mothername: Sequelize.STRING,
    Guardianname: {
        type:Sequelize.STRING,
        allowNull: true
                  },
    Mobile: Sequelize.STRING,
    ParentsEmailid:Sequelize.STRING,
    Emailid:{
        type:Sequelize.STRING,
        primaryKey:true,
        allowNull:false
    },
    Address :Sequelize.TEXT,
    Class :Sequelize.STRING,
    Stream:Sequelize.STRING,
    Extracurriculam:Sequelize.STRING,
    RollNo:{
        type:Sequelize.STRING    
    },
    Password:Sequelize.STRING,
},
{
tableName: "Admission",
timestamps: false

})
Admission.removeAttribute('id')
module.exports = Admission