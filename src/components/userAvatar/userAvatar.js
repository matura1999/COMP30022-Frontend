import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default class UserAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      username: this.props.username,
      isLoginUser: this.props.isLoginUser,
    }
    if (this.props.isLoginUser) {
      this.state.src = sessionStorage.getItem('avatar')
    } else {
      this.findAvatar(this.state.username)
    }
  }

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
          this.setState({ src: res.data })
        });
  }

  render() {
    const { src } = this.state;
    const size = this.props.size;
    if (src && src != 'null') {
      return (
        <Avatar
          size={size}
          src={'https://mojito-eportfolio.s3-ap-southeast-2.amazonaws.com/' + src}
        />
      )
    } else {
      return (
        <Avatar
          style={{ backgroundColor: "#7cb305" }}
          size={size}
          icon={<UserOutlined />}
        />
      );
    }
  }
}
