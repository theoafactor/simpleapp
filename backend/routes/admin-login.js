const express = require("express")

const Router = express.Router()

const adminLoginRouter = Router.get("/", function(request, response, next){

                    response.render("This is the login page for admin")


})


module.exports = adminLoginRouter;
