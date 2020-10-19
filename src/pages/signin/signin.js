import React, { Component } from "react";
import { Alert, Form, Input, Button} from 'antd';
import { Link } from "react-router-dom";
import "./signIn.scss"
import 'antd/dist/antd.css';
const layout = {
    labelCol: { offset: 2, span: 8 },
    wrapperCol: { offset: 2, span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 2, span: 20 },
};

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notice: ''
        };

        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    };


    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    onFinish = (values) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ username: values.username, password: values.password })
        };
        fetch('https://mojito-portfolio-backend.herokuapp.com/user/find', requestOptions)
            .then(res => res.json())
            .then(res => {
                console.log(res)
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
                <div class="login-box">
                    <h2 class="sign-in-title">
                        <bold>
                            Sign in to Mojito
                        </bold>
                    </h2>
                    {this.state.notice && (
                        <Alert
                            style={{ alignSelf: 'center', width: '100' }}
                            message={this.state.notice}
                            type="error"
                            showIcon
                            closable
                        />
                    )}
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
                                style={{ fontSize: '20px' }}
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
                                <Button type="primary" htmlType="submit" size='large' block style={{ background: '#8CC63E' }}>
                                    Sign in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>


                    <div class="signup-redirect">
                        New to Mojito{"?   "}<Link exact to='/signup'><u>Create an account!</u></Link>
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