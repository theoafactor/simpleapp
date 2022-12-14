import { useRef, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Register(props){

    const fullnameRef = useRef(null)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const emailRef = useRef(null)

    const [message, setMessage] = useState({ info: null})


    const registerUser = () => {
        let fullname = fullnameRef.current.value
        let email = emailRef.current.value;
        let username = usernameRef.current.value
        let password = passwordRef.current.value

        if(fullname.length > 0 && username.length > 0 && password.length > 0){
            //you can proceed
            axios.post("/register-user", {
                fullname,
                email,
                username, 
                password
            }).then( (feedback) => {

                console.log(feedback) //feedback.data.message
                setMessage({
                    info: feedback.data.message
                })



            } )


        }else{
            //fill all fields
        }


    }

    return (
        <div>
            <h3>Register</h3>

                <h6>{message.info}</h6>

            <form>
            <div>
                    <label>Full name</label>
                    <input type='text' ref={fullnameRef} />
                </div>

                <div>
                    <label>Email</label>
                    <input type='email' ref={emailRef}/>
                </div>
                
                <div>
                    <label>Username</label>
                    <input type='text' ref={usernameRef}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type='password' ref={passwordRef} />
                </div>

                <div>
                    <button type='button' onClick={() => registerUser()}>Register</button>
                </div>

                <div>
                   <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )



}

export default Register