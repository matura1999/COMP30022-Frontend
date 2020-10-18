import React, { Component } from "react";
import Header from "./components/header/header";
import Intro from "./pages/intro/intro";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import UserCentre from "./pages/userCentre/userCentre";
import UserPortfolio from "./pages/userPortfolio/userPortfolio"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/searchResult/searchResult"
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
              <Route path="/userCentre/:path/:subpath" component={UserCentre} />
              <Route path="/userPortfolio/:username/:path" component={UserPortfolio} />
              <Route path="/search" component={Search} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
