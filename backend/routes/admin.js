const express = require("express")

const Router = express.Router()

const adminRouter = Router.get("/", function(request, response, next){

                    response.send("This is the admin page")


})


module.exports = adminRouter;
