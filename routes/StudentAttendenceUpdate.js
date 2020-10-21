const express = require ('express')
const router = express.Router();
const db = require('../model/Admission')
const db1 = require('../model/studentLogin')
const db3 = require('../model/StudentAttendenceLog')
const db4 = require('../model/TeacherLogin')
const bcrypt = require('bcrypt')


router.post('/teacherInfoUpdate',  function(req, res){

     
    for ( i=1 ; i<31 ; i++ )
    {
       
        

    }



    db3.update(  {NoOfPresent: req.body.RollNo.Present,
        NoOfAbsent: req.body.RollNo.Absent + previ ,
        NoOfLeaves: req.body.RollNo.Leaves,
        TotalDays: req.body.RollNo.Leaves }, {where:{RollNo:i}}).then(
            db4.update(
                {Emailid:req.body.Emailid},
                {Password:password },
                {where:{Emailid:req.body.Emailid}}
            )
        ).then(res.send("Successfully Updated"))

    
})
router.post('/studentInfoUpdate',  function(req, res){

     bcrypt.hash(req.body.Password, 10).then(password=>
     db.update(
       { Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        DoB:req.body.DoB,
       Sex:req.body.Sex,
        Fathername:req.body.Fathername,
        Mothername:req.body.Mothername,
       Guardianname:req.body.Guardianname,
        Mobile:req.body.Mobile,
        ParentsEmailid:req.body.ParentsEmailid,
        Address :req.body.Address,
        Class :req.body.Class,
        Stream:req.body.Stream,
        Extracurriculam:req.body.Extracurriculam,
        Password:password},
        {where:{Emailid:req.body.Emailid}}).then(
            db1.update(
                {
                Password:password },
                {where:{Emailid:req.body.Emailid}}
            )
        )).then(res.status(200).send("Successfully Updated"))

    
})


module.exports = router