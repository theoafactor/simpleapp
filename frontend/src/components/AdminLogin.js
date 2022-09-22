import { Link } from "react-router-dom"
function AdminLogin(props){

    return (
        <div>
            <h3>Admin Log in</h3>
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' />
                </div>

                <div>
                    <label>Password</label>
                    <input type='password' />
                </div>

                <div>
                    <button type='button'>Log in</button>
                </div>
              
            </form>
        </div>
    )



}

export default AdminLogin