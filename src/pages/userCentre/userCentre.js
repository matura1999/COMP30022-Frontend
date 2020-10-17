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
      case "/userCentre/manageContent/essaysManagement":
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
