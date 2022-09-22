import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Login from "./components/Login"
import Register from "./components/Register"
import AdminLogin from './components/AdminLogin';
import BusinessLogin from "./components/BusinessLogin";
import BusinessRegister from './components/BusinessRegister';
import { Routes, Route } from "react-router-dom"

function App() {

  const [appState, setAppState] = useState({
        is_user_logged_in: false,
        user_data: null,
        current_auth_page: 'login'
  })


  const changeLoginStatus = (user_data) => {

    setAppState({
      is_user_logged_in: true,
      user_data: user_data
    })


  }




 


  return (
        <Routes>
            <Route path="/" element={<Login changeLoginStatusProp={changeLoginStatus}/>}></Route>
            <Route path="/login" element={<Login changeLoginStatusProp={changeLoginStatus}/>}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route path="/business/login" element={<BusinessLogin />}></Route>
            <Route path="/business/register" element={<BusinessRegister />}></Route>
            <Route path="/admin/login" element={<AdminLogin />}></Route>
        </Routes>
  );
}

export default App;
