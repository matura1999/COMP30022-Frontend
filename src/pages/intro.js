import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/intro.css";

export default class Intro extends Component {
  render() {
    return (
      <div class="intro-page">
        <div class="slogan">
          Built for <br /> uni students
        </div>
        <div class="intro-text">
          Mojito is the online portfolio platform to make your life easier as a
          university student. From archiving your acadmic work to sharing your
          thoughts and reflections, you can assemble and maintain your
          E-portfolio like a pro.
        </div>
        <NavLink exact to="/signup" class="get-start">
          <button class="get-start-button">GET STARTED NOW</button>
        </NavLink>
      </div>
    );
  }
}
