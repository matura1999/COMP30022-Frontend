import React from "react";
import moment from "moment";
import { Form, Input, DatePicker, Button } from "antd";
const BasicInfoForm = ({ name, dob, phone, email, intro, onFinish }) => {
  const [form] = Form.useForm();

  let momentObj = moment(dob);
  console.log("moment:", momentObj);

  form.setFieldsValue({
    name: name,
    phone: phone,
    dob: momentObj,
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
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
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

export default BasicInfoForm;
