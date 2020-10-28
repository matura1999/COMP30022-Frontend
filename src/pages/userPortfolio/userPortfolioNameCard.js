import React, { Component } from "react";
import "./userPortfolio.scss";
import UserAvatar from "../../components/userAvatar/userAvatar";

export default class UserPortfolioNameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      name: "",
      intro: "",
      avatar: null
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
      "https://mojito-portfolio-backend.herokuapp.com/user/info/basic/" + this.state.user,
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

  // read user avatar source information and save it in session
  findAvatar = async (username) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await fetch(
      "https://mojito-portfolio-backend.herokuapp.com/files/avatar/" + username,
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({avatar: res.data})
      });
  }

  render() {
        return (
        <div className="userPortfolio__nameCard">
            <div className="userPortfolio__avatarContainer">
                <UserAvatar size={80} username={this.state.user} isLoginUser={false}/>
            </div>
            <div className="userPortfolio__nameContainer">
                <h2>{this.state.name}</h2>
            </div>
            <div className="userPortfolio__introContainer">
                <h3>{this.state.intro}</h3>
            </div>
        </div>
        );
  }
}
