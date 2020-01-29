import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "Lambda School",
    password: "i<3Lambd4"
  });

  const routerHistory = useHistory();
  
  const handleSubmit = e => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/login", loginCredentials)
      .then(res => {
        localStorage.setItem("USER_TOKEN", res.data.payload);
        routerHistory.push("/friends");
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleChange = e => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Name:</label>
        <input type="text" name="username" id="username" 
          value={loginCredentials.username} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="password" 
          value={loginCredentials.password} onChange={handleChange} />
      </div>
      <button>Login</button>
    </form>
  );
}

export default Login;