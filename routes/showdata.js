const express = require ('express')
const router = express.Router();
const db = require('../model/Admission')
const db1 = require('../model/studentLogin')
const db3 = require('../model/TeacherAdmission')
const db4 = require('../model/TeacherLogin')


router.post('/studentInfo', function(req, res){
    db.findAll({where:{Emailid:req.body.Emailid}}).then(user=>{res.status(200).send(user)})   
})
router.post('/teacherInfo', async function(req, res){
     db.findAll({where:{Emailid:req.body.Emailid}}).then(user=>{ res.status(200).send(user)})
})


module.exports = router