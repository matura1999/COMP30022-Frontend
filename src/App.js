import React, { Component } from "react";
import Header from "./components/header/header";
import Intro from "./pages/intro/intro";
import SignUp from "./pages/signUp/signUp";
import SignIn from "./pages/signIn/signIn";
import UserCentre from "./pages/userCentre/userCentre";
import UserPortfolio from "./pages/userPortfolio/userPortfolio"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResult from "./pages/searchResult/searchResult"
import "./App.css";
import 'antd/dist/antd.css';
import 'antd/dist/antd.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="App-body">
            <Switch>
              <Route exact path="/" exact component={Intro} />
              <Route exact path="/signUp" exact component={SignUp} />
              <Route exact path="/signIn" exact component={SignIn} />
              <Route path="/userCentre/:path/:subpath" component={UserCentre} />
              <Route path="/userPortfolio/:username/:path" component={UserPortfolio} />
              <Route path="/searchResult" component={SearchResult} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
