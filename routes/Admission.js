const express = require ('express')
const router = express.Router();
const db = require('../model/Admission')
const db1 = require('../model/studentLogin')
const db3 = require('../model/TeacherAdmission')
const db4 = require('../model/TeacherLogin')
const db5 = require('../model/StudentAttendenceLog')
const cors = require('cors')
const bcrypt = require('bcrypt')



router.post('/studentadmission',async (req,res)=>{ 

    console.log(req.headers)
    console.log(req.body);
    console.log(req.hostname)
    console.log(req.rawHeaders)
     db.findOne( { where : {Emailid : req.body.Emailid}}).then(user=>{

      
       var ID1 =  Math.floor(Math.random() * 10); 
        console.log(ID1);
              if(user!=null)
         {
             res.status(400).send('Already Registered')
             
         }else{ 
            bcrypt.hash(req.body.Password, 10).then( password=>
             db.create({
               Firstname:req.body.Firstname,
                   Lastname:req.body.Lastname,
                   DoB:req.body.DoB,
                   Sex:req.body.Sex,
                   Fathername:req.body.Fathername,
                   Mothername:req.body.Mothername,
                   Guardianname:req.body.Guardianname,
                   Mobile:req.body.Mobile,
                   ParentsEmailid:req.body.ParentsEmailid,
                   Emailid:req.body.Emailid,
                   Address :req.body.Address,
                   Class :req.body.Class,
                   Stream:req.body.Stream,
                   Extracurriculam:req.body.Extracurriculam,
                   RollNo: req.body.ID,
                   Password:password
           }).then(db1.create({
               Emailid:req.body.Emailid,
               Password:password
           })).then(db5.create({
            RollNo:req.body.ID
        })).then(res.send("successfully Registered")))
      } })
})

router.post('/teacheradmission',async (req,res)=>{
    
    db.findOne( { where : {Emailid : req.body.Emailid}}).then(user=>{
        if(user!=null)
   {
       res.status(400).send('Already Registered')
       
   }else{ 
     bcrypt.hash(req.body.Password, 10).then(password=>
     db3.create({
        Firstname:req.body.Firstname,
            Lastname:req.body.Lastname,
            DoB:req.body.DoB,
            Sex:req.body.Sex,
            Fathername:req.body.Fathername,
            Mothername:req.body.Mothername,
            Mobile:req.body.Mobile,
            Emailid:req.body.Emailid,
            Address :req.body.Address,
            Subject:req.body.Subject,
            Password:password
    }).then(db4.create({
        Emailid:req.body.Emailid,
        Password:password
    })).then(res.send("successfully Registered")))}})
})
module.exports = router