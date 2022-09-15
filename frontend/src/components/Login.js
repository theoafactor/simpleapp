function Login(props){

    return (
        <div>
            <h3>Log in</h3>
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
                    <a href='#' onClick={() => props.showAuthPageProp('register')}>Go to Register page</a>
                </div>
            </form>
        </div>
    )



}

export default Login