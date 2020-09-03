import React, { Component } from "react";
import {Form, Input, Button} from 'antd'
import {Link} from "react-router-dom";
import "../styles/signup.css"
import 'antd/dist/antd.css';
const layout = {
    labelCol: { offset: 8, span: 8 },
    wrapperCol: { offset: 8, span: 8 },
  };
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

export default class Signup extends Component{
    onFinish = values => {
        console.log('Success:', values);
    };
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    render(){
        return(
            <div class="main-page">
                <div class="signup-box">
                    <h3 class="sign-up-sub-header"> <b>Join Mojito</b></h3>
                    <h2 class="sign-up-header"><b>Create your account</b></h2>
                </div>
                <div class='signup-form'>
                    <Form
                        {...layout}
                        layout="vertical"
                        name="signup"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email address!' }]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit" size='large' block style={{background: '#8CC63E'}}>
                                Sign up
                            </Button>
                        </Form.Item>
                    </Form>
                    <div class="signin-redirect">
                        Already have an accont{"?   "}<Link exact to='/signin'><u>Sign in!</u></Link>
                    </div>
                </div>
            </div>
        )
    }
}