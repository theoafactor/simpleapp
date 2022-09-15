const express = require("express")

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
server.use("/", indexRouter)
server.use("/register-user", registerRouter)



server.listen("3001", function(){
    console.log(`Server is listening on http://localhost:3001`)
})