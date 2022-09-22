const express = require("express")
const session = require("express-session"); 
require("dotenv").config()
const mongodbSession = require("connect-mongodb-session")(session);
console.log('New data')
//create an app
const server = express()
const mongodbSessionStore = new mongodbSession({
    uri: process.env.DB_URL,
    databaseName: "sampleuser",
    collection: "sampleuser-sessions"
  })


  server.use(session({
    secret: "whateverishereisbeautifulandblessedinthenameofJesusAmenMovingon",
    resave: false,
    saveUninitialized: false,
    store: mongodbSessionStore
  
  }))


//routes
// server.get("/", function(request, response){

//     response.send("This is working")

// })

const indexRouter = require("./routes/index")
const contactRouter = require("./routes/contact")
const registerRouter = require("./routes/register-user")
const userLoginRouter = require("./routes/user-login")
const adminLoginRouter = require("./routes/admin-login")

//Admin Route
const adminRouter = require("./routes/admin");

server.use(express.json())


//Endpoints
// -- Authentication
server.use("/login/user", userLoginRouter);
server.use("/login/admin", adminLoginRouter);

// 1. Home
server.use("/", indexRouter)

// 2. Register User
server.use("/register-user", registerRouter)

// 3. Admin Home Page
server.use("/admin", adminRouter);





server.listen("3001", function(){
    console.log(`Server is listening on http://localhost:3001`)
})
