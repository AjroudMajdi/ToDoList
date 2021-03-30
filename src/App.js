
import React, { useEffect, useState } from "react";
import { navigate, Router } from "@reach/router"
import Login from './login'
import Home from './home'
import Logout from './logout'



import './App.css';

const LOGIN_STORAGE_KEY = 'login-todo' 
const LOGIN_STORAGE_VALUE = 'logged'

const App  = ()=> {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem(LOGIN_STORAGE_KEY) === LOGIN_STORAGE_VALUE
    if(!isLoggedIn) {
     navigate('/')
    }
   }, [])
 
  return (
    <div className="App">
    <Router>
          <Login path="/" loginStorageKey={LOGIN_STORAGE_KEY} loginStorageValue={LOGIN_STORAGE_VALUE} />
          <Home path="/home" />
          <Logout path="/logout" loginStorageKey={LOGIN_STORAGE_KEY} />


      </Router>

    </div>
  );
}

export default App;
