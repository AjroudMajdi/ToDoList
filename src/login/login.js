import React, { useEffect, useState } from "react";
import { TextField, Button } from "react-md";
import { navigate } from "@reach/router";

import "./style.scss";

const Login = ({ loginStorageKey, loginStorageValue }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState();

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem(loginStorageKey) === loginStorageValue;
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [loginStorageKey, loginStorageValue]);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const login = () => {
    if (email === "test@test.com" && password === "test") {
      localStorage.setItem(loginStorageKey, loginStorageValue);
      navigate("/home");
    }
  };

  return (
    <div className="Login">
      <div className="Login-title">To Do App By Majdi Ajroud</div>
      <TextField
        className="Login-textField-email "
        label="Email: "
        value={email}
        type="email"
        onChange={({ target }) => setEmail(target.value)}
        required
      />
      <TextField
        className="Login-textField-password"
        label="password: "
        value={password}
        type="password"
        onChange={({ target }) => setPassword(target.value)}
        required
      />
      <Button
        onClick={() => login()}
        primary
        swapTheming
        className="Login-button"
        disabled={!validateForm()}
      >
        Login
      </Button>
    </div>
  );
};
export default Login;
