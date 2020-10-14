import React, { Component } from "react";
import Header from "./components/header/header";
import Intro from "./pages/intro/intro";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import UserPage from "./pages/userCentre/userCentre";
import UserPortfolio from "./pages/portfolio/userPortfolio"
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
              <Route path="/userPortfolio/:path" component={UserPortfolio} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
