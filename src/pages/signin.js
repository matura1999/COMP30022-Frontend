import React, { Component } from "react";
import {Form, Input, Button} from 'antd';
import {Link} from "react-router-dom";
import "../styles/signin.css"
import 'antd/dist/antd.css';
const layout = {
    labelCol: { offset: 2, span: 8 },
    wrapperCol: { offset: 2, span: 20 },
  };
const tailLayout = {
    wrapperCol: { offset: 2, span: 20 },
};

export default class Signin extends Component{
    onFinish = values => {
        console.log('Success:', values);
    };
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    render(){
        return(
            <div class="login-box">
                <h2 class="title">
                    <bold>
                        Sign in to Mojito
                    </bold>
                </h2>

                <div class="login-form">
                    <Form
                        {...layout}
                        name="signin"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        >
                        <Form.Item
                            style={{fontSize:'20px'}}
                            label="Username or email address"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username or your email address!' }]}
                        >
                            <Input />
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
                </div>


                <div class="signup-redirect">
                    New to Mojito{"?   "}<Link exact to='/signup'><u>Create an account!</u></Link>
                </div>
            </div>
        )
    }
}