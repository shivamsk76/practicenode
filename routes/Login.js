const express = require('express')
const bodyParser = require('body-parser')
const dbConfig = require('../config/config')
const bcrypt = require('bcrypt')
const initializePassport = require('../passport-config/passport-config')
const passport = require('passport')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const { Router } = require('express')
const router = express.Router();

var app = express()
dbConfig.authenticate().then(() => {
    console.log("database connected")
}).catch(err => console.log('Error: '+ err))

initializePassport(passport)
app.use(bodyParser.json())
app.use(cors({origin:"http://localhost:3000"}))

app.use( session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser('secret'))
app.use(passport.initialize())
app.use(passport.session())






    router.post('/studentlogin',(req, res, next) =>{
        passport.authenticate("local", (err, user, info) => {
            if (err) throw err;
            console.log(user);
            if (!user) res.send("No User Exists");
            else {
              req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
              });
            }
          })(req, res, next);
    })
   
    router.post('/teacherslogin',(req, res, next) =>{
      passport.authenticate("local", (err, user, info) => {
          if (err) throw err;
          console.log(user);
          if (!user) res.send("No User Exists");
          else {
            req.logIn(user, (err) => {
              if (err) throw err;
              res.send("Successfully Authenticated");
              console.log(req.user);
            });
          }
        })(req, res, next);
  })
module.exports = router

