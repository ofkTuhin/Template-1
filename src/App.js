import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from './Component/Home/Home';
import SignUp from './Component/SignUp/SignUp';
import SideBar from './Component/SideBar/SideBar';
import NavBar from './Component/NavBar/NavBar';




function App() {
  const [isOpen,setIsOpen]=useState(false) 
  const toggle=()=>{
      setIsOpen(!isOpen)
  }
  return (
    <div className="App">
     
     
    <Router>
    <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
            <NavBar toggle={toggle}></NavBar>
   

    <Switch>
    <Route path="/login">
            <SignUp></SignUp>
          </Route>
      <Route path="/">
        <Home></Home>

      </Route>
      
    </Switch>

      
    </Router>
    </div>
  );
}

export default App;
