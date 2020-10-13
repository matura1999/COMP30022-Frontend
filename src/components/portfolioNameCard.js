import React, { Component } from "react";
import "../styles/userPortfolio.css";
import UserAvatar from "./UserAvatar";

export default class PortfolioNameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      intro: "",
    };
  }

  componentDidMount = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await fetch(
      "https://mojito-portfolio-backend.herokuapp.com/user/info/basic/" +
        sessionStorage.getItem("username"),
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
          setTimeout(() => {}, 300);
        } else {
          // return data, include all basic user information
          const data = res.data;
          this.setState({ name: data.name, intro: data.self_intro });
        }
      });
  };

  render() {
    return (
      <div className="portfolio-name-card">
        <div className="portfolio-avatar-container">
          <UserAvatar size={80} />
        </div>
        <h2>{this.state.name}</h2>
        <div className="portfolio-intro-container">
          <h3>{this.state.intro}</h3>
        </div>
      </div>
    );
  }
}
