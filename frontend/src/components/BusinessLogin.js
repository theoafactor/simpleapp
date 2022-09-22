import { Link } from "react-router-dom"
function BusinessLogin(props){

    return (
        <div>
            <h3>Service Provider Log in</h3>
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

                <div>
                    <h5>Click here to <Link to="/business/register">register</Link></h5>
                </div>
              
            </form>
        </div>
    )



}

export default BusinessLogin