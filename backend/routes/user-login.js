const express = require("express")
const bcryptjs = require("bcryptjs")
require("dotenv").config()
// const session = require("express-session"); 
const mongodb = require("mongodb")
// const mongodbSession = require("connect-mongodb-session")(session);

const mongoClient = mongodb.MongoClient;

const client = new mongoClient(process.env.DB_URL)

// const app = express()

// const mongodbSessionStore = new mongodbSession({
//     uri: process.env.DB_URL,
//     databaseName: "sampleuser",
//     collection: "sampleuser-sessions"
//   })


//   app.use(session({
//     secret: "whateverishereisbeautifulandblessedinthenameofJesusAmenMovingon",
//     resave: false,
//     saveUninitialized: false,
//     store: mongodbSessionStore
  
//   }))

const Router = express.Router()

const userLoginRouter = Router.post("/", async function(request, response, next){

    console.log("Loading")

                    const username = request.body.username;
                    const password = request.body.password;

                    const feedback = await client.db(process.env.DB_NAME).collection("users").findOne({ username: username })

                    if(feedback){
                        //the user exists
                        //const savedPassword = feedback.
                        console.log(feedback)

                        //retrieve the passord
                        let saved_password = feedback.password

                        const password_checker = await bcryptjs.compare(password, saved_password)

                        if(password_checker){
                            console.log("This password matched")

                            //create a session for the user
                            // request.session.user_session = feedback
                            // console.log(request.session)
                            request.session.user_session = feedback;

                            response.send({
                                message: "User logged in successfully",
                                data: request.session.user_session,
                                code: "login-success"
                            })


                        }else{
                            console.log("Password invalid")
                        }
                    }else{
                        //the user does not exist

                    }








})


module.exports = userLoginRouter;
