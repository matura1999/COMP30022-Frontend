import React, { Component } from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <Header/>
        <div>
          <h1></h1>
        </div>
      </Router>
    );
  }
}

export default App;
