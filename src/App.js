import React, { Component } from 'react';
import Header from './components/header';
import Intro from './pages/intro';
import Signup from './pages/signup';
import Signin from './pages/signin';
import UserCentre from './pages/userCentre';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render(){
    return (
      
      <Router>
        <Header/>
        <div className="App">
          <Switch>
            <Route exact path='/'
              exact component = {Intro}
            />
            <Route exact path='/signup'
              exact component = {Signup}
            />
            <Route exact path='/signin'
              exact component = {Signin}
            />
            <Route exact path='/usercentre'
              exact component = {UserCentre}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
