import React, { Component } from 'react';
import Header from './components/header';
import Intro from './pages/intro'
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
