import React from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../utils/Api";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [loginStatus, setLoginStatus] = useState("");


  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    Api.get("/api/users/login").then((res) => {
      if (res.data.loggedIn === true) {
        setLoginStatus(res.data.users[0].username);
        
      }
    });
  }, []);


  const login = (e) => {
    console.log("hello")
    e.preventDefault();
    if(disabled){
      console.log("disabled");
    }
    else{
      console.log("world")
      setDisabled(true);

      Api.post("/api/users/login", {
        email: email,
        password: password,
      }).then((res) => {
        if (res.data.message) {
          setLoginStatus(res.data.message);
          
          console.log("salam");
        } else {
          setLoginStatus(res.data[0].name);
          navigate("/", {replace: true});
           console.log("dunya");

        }
      });
    }
  };



  return (
    <section id="login-page">
      <form action="">
        <h1 id="header">Fifteen Book</h1>
        <input
          id="input"
          type="text"
          name="username"
          placeholder="Email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button id="btn" onClick={login} disabled={disabled}>
          Log In
        </button>

        <div>
          Don't have an account? <Link to={"/signup"}>Sign up</Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
