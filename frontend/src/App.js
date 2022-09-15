import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Login from "./components/Login"
import Register from "./components/Register"

function App() {

  const [appState, setAppState] = useState({
        is_user_logged: false,
        current_auth_page: 'login'
  })

  const showAuthPage = (pagename) => {

      setAppState({
          current_auth_page: pagename
      })

  }


  return (
    <div className="App">
      <div className="App-header">

            { appState.current_auth_page === "login" ? <Login showAuthPageProp={showAuthPage}/> : <Register showAuthPageProp={showAuthPage} /> }

      </div>
    </div>
  );
}

export default App;
