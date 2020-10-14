import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import "./header.css";
import UserAvatar from "../userAvatar/userAvatar";
import {
  FolderViewOutlined,
  IdcardOutlined,
  UploadOutlined,
  AppstoreOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default class HeaderRight extends Component {
  onLogout = () => {
    window.location.href = "/";
    window.sessionStorage.clear();
  };

  menu = (
    <Menu>
      <Menu.Item>
        <Link exact to="/userPortfolio/info">
          <FolderViewOutlined /> My Portfolio
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link exact to="/userCentre/userInfo/basic">
          <IdcardOutlined /> User Info
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link exact to="/userCentre/uploadContent/files">
          <UploadOutlined /> Upload Content
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link exact to="/userCentre/manageContent/files">
          <AppstoreOutlined /> Manage Content
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a type="primary" block onClick={this.onLogout}>
          <LogoutOutlined /> Sign out
        </a>
      </Menu.Item>
    </Menu>
  );

  render() {
    if (!sessionStorage.getItem("authorised")) {
      return (
        <div class="sign-button-container">
          <Link exact to="/signin" class="sign-in">
            <button class="sign-in-button">Sign in</button>
          </Link>
          <Link exact to="/signup" class="sign-up">
            <button class="sign-up-button">Sign up</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div class="avatar-container">
          <Dropdown overlay={this.menu} placement="bottomRight">
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <UserAvatar size={40} />
            </a>
          </Dropdown>
        </div>
      );
    }
  }
}