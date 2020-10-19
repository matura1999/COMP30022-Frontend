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
import "./userCentre.scss";

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
        return <div>Page does not exist.</div>
    }
  };

  render() {
    if (sessionStorage.getItem('authorised')) {
      const {selectKey, openKey} = this.state;
      return (
        <div class="userCentre__body">
          <div class="userCentre__banner">
            <h1>User Centre</h1>
          </div>
          <Row className="userCentre__menuAndContent">
            <Col className="userCentre__menu" span={6} >
              <UserCentreMenu selectKey={[selectKey]} openKey={[openKey]} />
            </Col>
            <Col className="userCentre__content" span={18}>
              {this.showContent()}
            </Col>
          </Row>
          <Footer />
        </div>
      );
    } else {
      return (
        window.location.href='/signIn'
      )
    }
  }
}
