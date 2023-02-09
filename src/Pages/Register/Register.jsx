import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import Api from "../../utils/Api";
import { useState } from "react";


const Register = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [disabled, setDisabled] = useState(false);



  const navigate = useNavigate();

  Api.defaults.withCredentials = true; 

  const register = (e) => {
    e.preventDefault(); 
    if(usernameReg.length < 1 &&  emailReg.length < 1 && passwordReg.length < 1){
        alert("Please filled all boxes!");
        setDisabled(false);
        console.log("sa");

    }
    else{
        Api.post("/api/users/register", {
          credentials: "include",
          name: usernameReg,
          email: emailReg,
          password: passwordReg,
        }).then((res) => { 
            console.log("response", res)
        });
        setDisabled(true);
        setTimeout(() =>{
            setUsernameReg("");
            setEmailReg("");
            setPasswordReg("");
            navigate("/login", { replace: true });
        }, 1000);

    }
  };

  return (
    <div id="register-page">
      <form action="">
        <h1 id="header">Fifteen Book</h1>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={usernameReg}
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={emailReg}
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          required
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={passwordReg}
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          required
        />
        <button id="btn" onClick={register} disabled={disabled}>
          Sign up
        </button>

        <div>
          Have an account? <Link to={"/login"}>Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
