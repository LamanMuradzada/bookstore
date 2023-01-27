import React from 'react';
import "./login.scss";

const Login = () => {
  return (
    <section id='login-page'>
    <form action="">
        <h1 id='header'>Fifteen Book</h1>
        <input id='password' type="text" name='username' placeholder='Phone number or username'/>
        <input id='input' type="password" name='password' placeholder='Password'/>
        <button id='btn'>Log In</button>
    </form>
    </section>
  )
}

export default Login