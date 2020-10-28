import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row, Menu, Dropdown,Button } from "antd";
import {
  FolderViewOutlined,
  IdcardOutlined,
  UploadOutlined,
  AppstoreOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import UserAvatar from "../userAvatar/userAvatar";
import "./header.scss";

export default class HeaderRight extends Component {
  onLogout = () => {
    window.location.href = "/";
    window.sessionStorage.clear();
  };

  goToUserInfo = () => {
    window.location.href = "/userCentre/userInfo/basic"
  }

  goToUpload = () => {
    window.location.href = "/userCentre/uploadContent/filesUpload"
  }
  
  goToManage = () => {
    window.location.href = "/userCentre/manageContent/filesManagement"
  }

  menu = (
    <Menu>
      <Menu.Item>
        <Link exact to={"/userPortfolio/" + sessionStorage.getItem('username') + "/info"}>
          <FolderViewOutlined /> My Portfolio
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a onClick={this.goToUserInfo}>
          <IdcardOutlined /> User Info
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={this.goToUpload}>
          <UploadOutlined /> Upload Content
        </a>
      </Menu.Item>
      <Menu.Item onclick={this.goToManage}>
        <a onClick={this.goToManage}>
          <AppstoreOutlined /> Manage Content
        </a>
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
        <Row className="header__signButtonsContainer">
          <Link exact to="/signIn" class="header__signIn">
            <Button className="header__signInButton">Sign in</Button>
          </Link>
          <Link exact to="/signUp" class="header__signUp">
            <Button className="header__signUpButton" type="primary">Sign up</Button>
          </Link>
        </Row>
      );
    } else {
      return (
        <div className="header__avatarContainer">
          <Dropdown overlay={this.menu} placement="bottomRight">
            <a
              className="header__dropdownLink"
              onClick={(e) => e.preventDefault()}
            >
              <UserAvatar size={40} username={sessionStorage.getItem('username')} isLoginUser={true}/>
            </a>
          </Dropdown>
        </div>
      );
    }
  }
}
