import React, { Component } from "react";
import Header from "./components/header";
import Intro from "./pages/intro";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import UserPage from "./pages/userPage";
import Sider from "./components/sider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="App-body">
            <Switch>
              <Route exact path="/" exact component={Intro} />
              <Route exact path="/signup" exact component={Signup} />
              <Route exact path="/signin" exact component={Signin} />
              <Route path="/userCentre/:path/:subpath" component={UserPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
