
import { navigate, Router } from "@reach/router"
import Login from './login'
import Home from './home'


import './App.css';


const App  = ()=> {
  return (
    <div className="App">
    <Router>
          <Login path="/"  />
          <Home path="/home" />
      </Router>

    </div>
  );
}

export default App;
