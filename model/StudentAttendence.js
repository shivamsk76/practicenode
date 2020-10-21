
const dbconfig = require('../config/config')
const Sequelize = require('sequelize')


 StudentAttendence = dbconfig.define('StudentAttendence',{
    
    
    Date: Sequelize.STRING,
    Class1: Sequelize.STRING,
    Class2: Sequelize.STRING,
    Class3: Sequelize.STRING,
    Class4: Sequelize.STRING,
    Class5: Sequelize.STRING,
    Class6:Sequelize.STRING,
    Class7: Sequelize.STRING,
    Class8:Sequelize.STRING,
    Class9:Sequelize.STRING,
    Class10:Sequelize.STRING,
   
},
{
tableName: "StudentAttendence",
timestamps: false

})
Admission.removeAttribute('id')
module.exports = Admission