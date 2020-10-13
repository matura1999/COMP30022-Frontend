import React, { Component } from "react";
import {
  Form,
  Input,
  DatePicker,
  Button,
  Upload,
  message,
  Col,
  Row,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import UserAvatar from "../components/UserAvatar";
import "../styles/userInfo.css";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "Invalid email!",
    number: "Invalid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

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
    if (values.user.dob) {
      dob = values.user.dob._d;
    }

    if (values.user.phone) {
      phone = values.user.phone;
    }

    if (values.user.email) {
      email = values.user.email;
    }

    if (values.user.introduction) {
      introduction = values.user.introduction;
    }
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: sessionStorage.getItem("username"),
        name: values.user.name,
        dob: dob,
        phone: phone,
        email: email,
        introduction: introduction,
      }),
    };
    fetch(
      "https://mojito-portfolio-backend.herokuapp.com/user/info/basic",
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
    let { form, updateList, productList } = this.props;
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await fetch(
      "https://mojito-portfolio-backend.herokuapp.com/user/info/basic/" +
        sessionStorage.getItem("username"),
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
          setTimeout(() => {}, 300);
        } else {
          // return data, include all basic user information
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
    return (
      <div>
        <div class="avatar">
          <Row>
            <Col span={4} offset={4}>
              <UserAvatar size={80} />
            </Col>
            <Col span={12}>
              <div class="upload-button">
                <Upload {...this.props}>
                  <Button icon={<UploadOutlined />}>Upload New Avatar</Button>
                </Upload>
              </div>
            </Col>
            <Col span={4}></Col>
          </Row>
        </div>
        <Form
          {...layout}
          name="basic-info"
          onFinish={this.onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item label="Username">
            <span className="username">
              {sessionStorage.getItem("username")}{" "}
            </span>
          </Form.Item>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input initialValue={this.state.name} />
          </Form.Item>
          <Form.Item name="dob" label="DoB">
            <DatePicker />
          </Form.Item>
          <Form.Item name="phone" label="Phone">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="introduction" label="Self Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ backgroundColor: "#8dc63f" }}
            >
              Save All Changes
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
