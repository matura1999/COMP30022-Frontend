import React, { Component } from "react";
import { Row, Col } from "antd";
import UserCentreMenu from "./userCentreMenu";
import UserInfoBasic from "../userCentreUserInfo/userInfoBasic";
import UserInfoEdu from "../userCentreUserInfo/userInfoEdu";
import UserInfoWork from "../userCentreUserInfo/userInfoWork";
import UploadFiles from "../userCentreUploadContent/uploadFiles";
import UploadMedias from "../userCentreUploadContent/uploadMedias";
import UploadEssays from "../userCentreUploadContent/uploadEssays";
import ManageMedias from "../userCentreManageContent/manageMedias";
import ManageFiles from "../userCentreManageContent/manageFiles";
import ManageEssays from "../userCentreManageContent/manageEssays";
import Footer from "../../components/footer/footer";
import "./userCentre.css";

export default class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selectKey: props.match.params.subpath,
      openKey: props.match.params.path
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  showContent = () => {
    switch (window.location.pathname) {
      case "/userCentre/userInfo/basic":
        return <UserInfoBasic />;
      case "/userCentre/userInfo/education":
        return <UserInfoEdu />;
      case "/userCentre/userInfo/work":
        return <UserInfoWork />;
      case "/userCentre/uploadContent/filesUpload":
        return <UploadFiles />;
      case "/userCentre/uploadContent/mediasUpload":
        return <UploadMedias />;
      case "/userCentre/uploadContent/essaysUpload":
        return <UploadEssays />;
      case "/userCentre/manageContent/filesManagement":
        return <ManageFiles />;
      case "/userCentre/manageContent/mediasManagement":
        return <ManageMedias />;
      case "/userCentre/manageContent/essaysManage":
        return <ManageEssays />;
      default:
        return <div>Page not exit</div>
    }
  };

  render() {
    if (sessionStorage.getItem('authorised')) {
      const {selectKey, openKey} = this.state;
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
                    <UserCentreMenu selectKey={[selectKey]} openKey={[openKey]} />
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
