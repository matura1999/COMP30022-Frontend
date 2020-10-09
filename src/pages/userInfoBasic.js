import React, { Component } from "react";
import { Form, Input, InputNumber, Button, Upload, Avatar, message, Col, Row } from 'antd';
import { UserOutlined, UploadOutlined } from '@ant-design/icons';
import "../styles/userInfo.css"

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: 'Invalid email!',
        number: 'Invalid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export default class UserInfoBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 20,
            phone: '',
            email: '',
            intro: ''
        }
    }

    onFinish = (values) => {
        console.log(values)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ 
                username: sessionStorage.getItem('username'), 
                name:values.user.name,
                age:values.user.age,
                phone: values.user.phone,
                email: values.user.email,
                introduction: values.user.introduction
            })
        };
        fetch('https://mojito-portfolio-backend.herokuapp.com/user/info/basic', requestOptions)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.success === false) {
                    setTimeout(() => {
                        
                    }, 300);
                } else {
                    console.log(res.message);
                }
            })
    };

    componentDidMount = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };
        await fetch('https://mojito-portfolio-backend.herokuapp.com/user/info/basic/' + sessionStorage.getItem('username'), requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.success === false) {
                    setTimeout(() => {

                    }, 300);
                } else {
                    // return data, include all basic user information
                    const data = res.data;
                    this.setState({ name: data.name, age: data.age, phone: data.phone, email: data.email, intro: data.self_intro })
                }
            })
    }

    render() {
        return (
            <div>
                <div class="avatar">
                    <Row>
                        <Col span={4} offset={4}>
                            <Avatar style={{ backgroundColor: '#8dc63f' }} size={80} icon={<UserOutlined />} />
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
                <Form {...layout} name="basic-info" onFinish={this.onFinish} validateMessages={validateMessages}>
                    <Form.Item label="Username">
                        <span className="username">{sessionStorage.getItem("username")} </span>
                    </Form.Item>
                    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 999 }]}>
                        <InputNumber defaultValue={this.state.age} key={this.state.age}/>
                    </Form.Item>
                    <Form.Item name={['user', 'phone']} label="Phone">
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Self Introduction">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                        <Button type="primary" htmlType="submit">
                            Save All Changes
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}