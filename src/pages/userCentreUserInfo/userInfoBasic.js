import React, { Component } from "react";
import { Button, Upload, message, Col, Row } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import UserAvatar from "../../components/userAvatar/userAvatar";
import BasicInfoForm from "./components/basicInfoForm";
import "./userInfo.scss";
import "../userCentre/userCentre.scss";
import url from '../../assets/constant/constant'

export default class UserInfoBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: null,
      phone: "",
      email: "",
      intro: "",
    };
  }

  onFinish = (values) => {
    var dob = null;
    var phone = "";
    var email = "";
    var introduction = "";
    if (values.dob) {
      dob = values.dob._d;
    }

    if (values.phone) {
      phone = values.phone;
    }

    if (values.email) {
      email = values.email;
    }

    if (values.introduction) {
      introduction = values.introduction;
    }
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: sessionStorage.getItem("username"),
        name: values.name,
        dob: dob,
        phone: phone,
        email: email,
        introduction: introduction,
      }),
    };
    fetch(
      url.backendUrl + "/user/info/basic",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success === false) {
          setTimeout(() => {}, 300);
        } else {
          message.success(`Your changes have been saved.`);
          console.log(res.message);
        }
      });
  };

  componentDidMount = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await fetch(
      url.backendUrl + "/user/info/basic/" +
        sessionStorage.getItem("username"),
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
          setTimeout(() => {}, 300);
        } else {
          const data = res.data;
          var dob = null;
          if (data.dob) {
            dob = new Date(data.dob);
          }
          this.setState({
            name: data.name,
            dob: dob,
            phone: data.phone,
            email: data.email,
            intro: data.self_intro,
          });
        }
      });
  };

  render() {
    const sendingData = { user: sessionStorage.getItem("username") };
    const { name, dob, phone, email, intro } = this.state;
    const props = {
      name: "file",
      multiple: false,
      action: url.backendUrl + "/files/avatar",
      method: "PUT",
      data: sendingData,
      onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          message.success(`Avatar uploaded successfully.`);
          const extention = info.file.name.split('.').pop();
          sessionStorage.setItem('avatar', sessionStorage.getItem('username') + '/avatar/avatar.' + extention);
          setTimeout(() => {
            window.location.reload(true)
          }, 300);
        } else if (status === "error") {
          message.error(`upload failed.`);
        }
      },
    };
    return (
      <div className="userInfo__basicInfo">
        <Row class="userInfo__avatarContainer">
            <Col className="userInfo__avatar" offset={4}>
              <UserAvatar size={80} username={sessionStorage.getItem('username')} isLoginUser={true}/>
            </Col>
            <Col className="userInfo__avatarUploadButton" offset={2}>
                <Upload
                  {...props}
                  showUploadList={false}
                  accept=".jpg,.png,.jpeg"
                >
                  <Button icon={<UploadOutlined />}>Upload New Avatar</Button>
                </Upload>
            </Col>
        </Row>

        <BasicInfoForm
          name={name}
          dob={dob}
          phone={phone}
          email={email}
          intro={intro}
          onFinish={this.onFinish}
        />
      </div>
    );
  }
}
