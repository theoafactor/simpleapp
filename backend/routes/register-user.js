const express = require("express")

const Router = express.Router()

const registerRouter = Router.post("/", function(request, response, next){

                        console.log(request.body)

                        //connect to m


                        response.send({
                            message: "User registered successfully",
                            data: []
                        })

})


module.exports = registerRouter