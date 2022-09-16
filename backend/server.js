const express = require("express")
console.log('New data')
//create an app
const server = express()

//routes
// server.get("/", function(request, response){

//     response.send("This is working")

// })

const indexRouter = require("./routes/index")
const contactRouter = require("./routes/contact")
const registerRouter = require("./routes/register-user")

server.use(express.json())


//Endpoints

// 1. Home
server.use("/", indexRouter)

// 2. Register User
server.use("/register-user", registerRouter)



server.listen("3001", function(){
    console.log(`Server is listening on http://localhost:3001`)
})
