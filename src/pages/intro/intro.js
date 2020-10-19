import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./intro.scss";

export default class Intro extends Component {
  getStartedButton = () => {
    if (!sessionStorage.getItem('authorised')) {
      return (
        <NavLink className="intro__getStartedButtonContainer" exact to="/signup">
          <button class="intro__getStartedButton">GET STARTED NOW</button>
        </NavLink>
      )

    } else {
      return (
        <NavLink
            className="intro__getStartedButtonContainer"
            exact to={"/userPortfolio/" + sessionStorage.getItem('username') + "/info"}
        >
          <button class="intro__getStartedButton">VIEW MY PORTFOLIO</button>
        </NavLink>
      )
    }
  }

  render() {
    return (
      <div class="intro__body">
        <div class="intro__slogan">
          Built for <br /> uni students
        </div>
        <div class="intro__introduction">
          Mojito is the online portfolio platform to make your life easier as a
          university student. From archiving your academic work to sharing your
          thoughts and reflections, you can assemble and maintain your
          E-portfolio like a pro.
        </div>
        {(this.getStartedButton())}
      </div>
    );
  }
}
