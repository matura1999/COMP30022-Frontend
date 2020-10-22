import React from "react";
// import { Form, Input, DatePicker, Button } from "antd";
// import React, { Component } from "react";
// import Moment from "react-moment";
import moment from "moment";
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
import DobPicker from "./dobPicker";
const UserInfoForm = ({ name, dob, phone, email, intro, onFinish }) => {
  //   const dateFormat = "";
  //   console.log(dob);
  //   let dateObj = new Date(dob);

  const [form] = Form.useForm();
  //   const dateObj = moment().format("YYYY/MM/DD");
  //   const dateOfBirth = dateObj.toString();

  form.setFieldsValue({
    name: name,
    phone: phone,
    // dob: dateObj,
    email: email,
    introduction: intro,
  });
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

  return (
    <Form
      {...layout}
      form={form}
      name="basic-info"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item label="Username">
        <span className="username">{sessionStorage.getItem("username")} </span>
      </Form.Item>
      {/* <Input initialValue={name} /> */}
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
        {/* <Input defaultValue="26888888" /> */}
      </Form.Item>
      <Form.Item name="dob" label="DoB">
        {/* <DatePicker defaultValue={moment("2020-10-20")} /> */}
        {/* <DatePicker defaultValue={moment().format("YYYY/MM/DD")} /> */}
        <DobPicker />
        {/* <DatePicker /> */}
      </Form.Item>
      <Form.Item name="phone" label="Phone">
        <Input />
        {/* <Input deafultValue={phone} /> */}
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
        <Input />
        {/* <Input deafultValue={email} /> */}
      </Form.Item>
      <Form.Item name="introduction" label="Self Introduction">
        <Input.TextArea showCount maxLength={150} deafultValue={intro} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button
          className="userCentre__formButton"
          type="primary"
          htmlType="submit"
          size="large"
        >
          Save All Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserInfoForm;
