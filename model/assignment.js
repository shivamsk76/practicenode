
const dbconfig = require('../config/config')
const Sequelize = require('sequelize')


 Assignment = dbconfig.define('Assignment',{
    
    
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
    Password:Sequelize.STRING,
},
{
tableName: "Assignment",
timestamps: false

})
Admission.removeAttribute('id')
module.exports = Admission