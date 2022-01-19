import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/services" exact component={Services}/>
         <Route path="/aboutUs" exact component={AboutUs}/>
         <Route path="/signUp" exact component={SignUp}/>
       </Switch>
     
    </Router>
  );
}

export default App;
