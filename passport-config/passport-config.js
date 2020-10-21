const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const authenticateModel = require('../model/studentLogin')

module.exports =  (passport) => {
    console.log('passport is initialized')
   passport.use( new localStrategy( async (username, password, done) => {
       console.log("ruunig passport config")
       console.log('username', username)
       console.log("password ", password)
       const result = await authenticateModel.findOne({where: {Emailid: username} })
       console.log(result)
       if(result==null){
           return done(null, false)
       }
       console.log("comparing the details")
       if(await bcrypt.compare(password, result.Password)){
           console.log("user verified")
           return done(null, result)
       }
       else{
           console.log("user not verified")
           return done(null, false)
       }
   }))

passport.serializeUser((user, cb) => {
    cb(null, user.username)
})
passport.deserializeUser((id,cb) =>{
    authenticateModel.findOne({where: { Emailid: username}}, (err, user) =>{
        const userInformation = {
            username: user.username
        }
        cb(err, userInformation)
    })
})
}