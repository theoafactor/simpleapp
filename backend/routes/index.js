const express = require("express")

const Router = express.Router()

const indexRouter = Router.get("/", function(request, response, next){

                    response.send("This is the home page")


})


module.exports = indexRouter;

