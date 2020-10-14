import React, { Component } from "react";
import Sider from "../../components/sider/sider";
import "../../styles/UserCentre/userCentre.css";
import { Row, Col } from "antd";
import UserInfoBasic from "../userInformation/userInfoBasic";
import UserInfoEdu from "../userInformation/userInfoEdu";
import UserInfoWork from "../userInformation/userInfoWork";
import UploadFiles from "../uploads/uploadFiles";
import UploadMedias from "../uploads/uploadMedias";
import UploadEssays from "../uploads/uploadEssays";
import ManageMedias from "../manage/manageMedias";
import ManageFiles from "../manage/manageFiles";
import ManageEssays from "../manage/manageEssays";
import Footer from "../../components/footer/footer";

let selectKey = "1";
let openKey = "sub1";
export default class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.setUpMenu(props.match.params.path, props.match.params.subpath);
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  setUpMenu = (path, subpath) => {
    if (path === "userInfo") {
      openKey = "sub1";
      if (subpath === "basic") {
        selectKey = "1";
      } else if (subpath === "education") {
        selectKey = "2";
      } else if (subpath === "work") {
        selectKey = "3";
      }
    } else if (path === "uploadContent") {
      openKey = "sub2";
      if (subpath === "files") {
        selectKey = "4";
      } else if (subpath === "medias") {
        selectKey = "5";
      } else if (subpath === "essays") {
        selectKey = "6";
      }
    } else if (path === "manageContent") {
      openKey = "sub3";
      if (subpath === "files") {
        selectKey = "7";
      } else if (subpath === "medias") {
        selectKey = "8";
      } else if (subpath === "essays") {
        selectKey = "9";
      }
    }
  };

  showContent = () => {
    console.log();
    switch (window.location.pathname) {
      case "/userCentre/userInfo/basic":
        return <UserInfoBasic />;
      case "/userCentre/userInfo/education":
        return <UserInfoEdu />;
      case "/userCentre/userInfo/work":
        return <UserInfoWork />;
      case "/userCentre/uploadContent/files":
        return <UploadFiles />;
      case "/userCentre/uploadContent/medias":
        return <UploadMedias />;
      case "/userCentre/uploadContent/essays":
        return <UploadEssays />;
      case "/userCentre/manageContent/files":
        return <ManageFiles />;
      case "/userCentre/manageContent/medias":
        return <ManageMedias />;
      case "/userCentre/manageContent/essays":
        return <ManageEssays />;
      default:
        return <div>Page not exit</div>
    }
  };

  render() {
    if (sessionStorage.getItem('authorised')) {
      return (
        <div class="all-but-header">
          <div class="banner">
            <h1>User Centre</h1>
          </div>
          <Row>
            <Col span={3}></Col>
            <Col span={18}>
              <div className="sider-and-content">
                <Row>
                  <Col span={6} align={"middle"}>
                    <Sider selectKey={[selectKey]} openKey={[openKey]} />
                  </Col>
                  <Col span={18} offset={0} style={{ height: "600px" }}>
                    <div class="content">{this.showContent()}</div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={3}></Col>
          </Row>
          <Footer />
        </div>
      );
    } else {
      return (
        window.location.href='/signin'
      )
    }
  }
}