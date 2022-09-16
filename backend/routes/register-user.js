const express = require("express")
const MongoDB = require("mongodb")
const bcrypt = require("bcryptjs")
require("dotenv").config()

const mongoClient = MongoDB.MongoClient

const client = new mongoClient(process.env.DB_URL)

const Router = express.Router()

const registerRouter = Router.post("/", async function(request, response, next){

                        //console.log(request.body)

                        const email = request.body.email
                        const password = request.body.password



                        //check if the user exists
                        const feedback = await client.db(process.env.DB_NAME).collection("users").findOne({ email })
                        //console.log("Checking the user: ", feedback)

                        if(feedback){
                            //connect to m
                            response.send({
                                message: "User registered already",
                                data: []
                            })
                        }else{
                            //connect to m
                            // response.send({
                            //     message: "User does not exist. Have you registered?",
                            //     data: []
                            // })
                            const hashedPassword = await bcrypt.hash(password, 10)

                            //save to database
                            const registration_feedback = await client.db(process.env.DB_NAME).collection("users").insertOne({
                                email: email,
                                password: hashedPassword
                            })

                            //console.log("Registration: ", registration_feedback)
                            if(registration_feedback){
                                //the user has been registered
                                response.send({
                                    message: "User registered successfully",
                                    data: {
                                        email: email
                                    }
                                })
                            }




                        }

                        

})
 

module.exports = registerRouter