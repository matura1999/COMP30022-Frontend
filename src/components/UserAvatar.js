import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default class UserAvatar extends Component {
  render() {
    const size = this.props.size;
    return (
      <Avatar
        style={{ backgroundColor: "#8dc63f" }}
        size={size}
        icon={<UserOutlined />}
      />
    );
  }
}
