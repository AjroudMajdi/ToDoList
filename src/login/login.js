import React, { useState } from "react";
import { TextField, Button } from "react-md";
import { navigate } from "@reach/router";

import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const login = () => {
    if (email === "test@test.com" && password === "test") {
      navigate("/home");
    }
  };

  return (
    <div className="Login">
      <h1>Welcome To ToDo By Majdi Ajroud</h1>

      <TextField
        className="email"
        label="Email"
        value={email}
        type="email"
        onChange={({ target }) => setEmail(target.value)}
        required
      />
      <TextField
        className="password"
        label="password"
        value={password}
        type="password"
        onChange={({ target }) => setPassword(target.value)}
        required
      />
      <Button
        onClick={() => login()}
        primary
        className="button"
        disabled={!validateForm()}
      >
        Login
      </Button>
    </div>
  );
};
export default Login;
