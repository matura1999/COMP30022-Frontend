import React, { Component } from "react";
import { Alert, Form, Input, Button } from 'antd'
import { Link } from "react-router-dom";
import "./signUp.scss"
const layout = {
    labelCol: { offset: 8, span: 8 },
    wrapperCol: { offset: 8, span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notice: ''
        };

        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    };
    onFinishFailed = (values) => {
        console.log('Success:', values);
    };
    onFinish = (values) => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ username: values.username, email: values.email, password: values.password })
        };
        fetch('https://mojito-portfolio-backend.herokuapp.com/user/add', requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.success === false) {
                    setTimeout(() => {
                        this.setState({
                            notice: res.error,
                        });
                    }, 300);
                } else {
                    sessionStorage.setItem('authorised', true);
                    sessionStorage.setItem('user', res.id);
                    sessionStorage.setItem('username', res.username);
                    window.location.href = "/";
                }
            })
    };
    render() {
        if (!sessionStorage.getItem('authorised')) {
            return (
                <div class="signUp__body">
                    <div class="signUp__titlesContainer">
                        <h3 class="signUp__subTitle">
                            Join Mojito
                        </h3>
                        <h2 class="signUp__title">
                            <b>Create your account</b>
                        </h2>
                    </div>
                    {this.state.notice && (
                        <Alert
                            style={{width: '100', alignSelf: "center" }}
                            message={this.state.notice}
                            type="error"
                            showIcon
                            closable
                        />
                    )}
                    <div class='signUp__form'>
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
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <br></br>
                            <Form.Item {...tailLayout}>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size='large'
                                    block
                                >
                                    Sign Up
                            </Button>
                            </Form.Item>
                        </Form>
                        <div class="signUp__redirectToSignIn">
                            Already have an accont{"?   "}<Link exact to='/signIn'><u>Sign in!</u></Link>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div class="login-box">
                    <h2 class="title">
                        <bold>
                            You have already signed in!
                        </bold>
                    </h2>
                </div>
            )
        }
    }
}