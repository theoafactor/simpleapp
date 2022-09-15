const express = require("express")

const Router = express.Router()

const contactRouter = Router.get("/", function(request, response, next){

                    response.send("This is the home page")


})


module.exports = contactRouter;

