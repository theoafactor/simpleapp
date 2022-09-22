import { useRef } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function BusinessRegister(props){

    const fullnameRef = useRef(null)
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)


    const registerUser = () => {
        let fullname = fullnameRef.current.value
        let username = usernameRef.current.value
        let password = passwordRef.current.value

        if(fullname.length > 0 && username.length > 0 && password.length > 0){
            //you can proceed
            axios.post("/register-user", {
                fullname,
                username, 
                password
            }).then( (feedback) => {

                console.log(feedback)

            } )


        }else{
            //fill all fields
        }


    }

    return (
        <div>
            <h3>Register your business</h3>
            <form>
            <div>
                    <label>Full name</label>
                    <input type='text' ref={fullnameRef} />
                </div>

                <div>
                    <label>Business name</label>
                    <input type='text' ref={fullnameRef} />
                </div>

                <div>
                    <label>Business email</label>
                    <input type='email' ref={fullnameRef} />
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
                    <button type='button' onClick={() => registerUser()}>Register Business</button>
                </div>

                <div>
                   <Link to="/business/login">Login</Link>
                </div>
            </form>
        </div>
    )



}

export default BusinessRegister