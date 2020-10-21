const express = require('express')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const { UUID } = require('sequelize')
const dbConfig = require('./config/config')
const axios = require('axios')
const bcrypt = require('bcrypt')
const initializePassport = require('./passport-config/passport-config')
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const PORT = process.env.port || 8080


const StudentAddModel = require('./model/Admission')
const TeacherAddModel = require('./model/TeacherAdmission')
var app = express()

const cors = require('cors')
app.use(cors({origin:"http://localhost:3000"}))


dbConfig.authenticate().then(() => {
    console.log("database connected")
}).catch(err => console.log('Error: '+ err))

initializePassport(passport)
app.use(bodyParser.json())

app.use( session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.get("/check", (req, res)=> {
    console.log(req.headers.origin)
    res.send("api response")
})

app.use(cookieParser('secret'))
app.use(passport.initialize())
app.use(passport.session())



const AdmissionRouters =require('./routes/Admission')

app.post('/studentadmission', AdmissionRouters )
    

app.post('/teacheradmission', AdmissionRouters )

const Login = require('./routes/Login')
    
app.post('/studentlogin',Login)

app.post('/teacherslogin',Login)

const Showdata = require('./routes/showdata')

app.post('/studentInfo',Showdata)

app.post('/TeacherInfo',Showdata)

const Editdata = require('./routes/Editdata')

app.post('/teacherInfoUpdate',Editdata)

app.post('/studentInfoUpdate',Editdata)

const StudentAttendence = require('./routes/StudentAttendence')
   
app.post('/studentattendence',StudentAttendence)



dbConfig.sync(
    {
    logging: console.log,
    force: true
}
)
.then(() =>{
    console.log('connection to database established successfully.');
})
.catch(err => {
    console.log("unable to connect to db",err);
});

app.listen(PORT , console.log("server is running",PORT))