import { Link } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"

function Login(props){

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)


    const loginUser = async() => {

        let username = usernameRef.current.value
        let password = passwordRef.current.value

        if(username.length > 0 && password.length > 0){

            const feedback = await axios.post("/login/user", {
                username,
                password
            })

            console.log(feedback)

            if(feedback.code == "login-successful"){
                //set the state of the application to login
                props.changeLoginStatusProp(feedback.data)


            }




        }else{
            //all fields are required

        }


    }

    return (
        <div>
            <h3>Log in</h3>
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' ref={usernameRef}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type='password' ref={passwordRef} />
                </div>

                <div>
                    <button type='button' onClick={() => loginUser()}>Log in</button>
                </div>
                <div>
                     <Link to="/register">Register</Link>
                </div>

                <div>
                    <h4>Are  you a service provider? </h4>
                     <p>Click <Link to="/business/login">here</Link> to login</p>
                </div>
            </form>
        </div>
    )



}

export default Login