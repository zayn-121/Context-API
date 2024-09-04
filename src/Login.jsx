import React, { useContext, useState } from "react";
import { LoginContext } from "./context/LoginContextProvider";

const Login = () => {
   const[userName, setUserName] = useState('')
   const[password, setPassword] = useState('')
   const { setUser} = useContext(LoginContext)

   const handleLogin = (e)=> {
    // e.preventDefault()
    // console.log(useName, password)
    setUser({userName, password})
   }
  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder="username" onChange={(e)=> setUserName(e.target.value)}/>
      <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={()=> handleLogin()}>Login</button>
    </>
  );
};

export default Login;
