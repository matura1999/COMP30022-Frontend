import React, { Component } from "react";
import {Form, Input, InputNumber, Button, Upload, Avatar, message, Col, Row} from 'antd';
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
    onFinish = (values) => {
            console.log(values);
        };

    props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    render() {

        return (
            <div>
                <div class="avatar">
                    <Row>
                        <Col span={4} offset={4}>
                        <Avatar style={{backgroundColor: '#8dc63f'}} size={80} icon={<UserOutlined/>}/>
                        </Col>
                        <Col span={12}>
                        <div class="upload-button">
                            <Upload {...this.props}>
                                <Button icon={<UploadOutlined/>}>Upload New Avatar</Button>
                            </Upload>
                        </div>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                </div>
                <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                    <Form.Item label="Username">
                        <span className="username">abcdefg </span>
                    </Form.Item>
                    <Form.Item name={['user', 'name']} label="Name" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['user', 'age']} label="Age" rules={[{type: 'number', min: 0, max: 999}]}>
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item name={['user', 'phone']} label="Phone">
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{type: 'email'}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Self Introduction">
                        <Input.TextArea/>
                    </Form.Item>
                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 4}}>
                        <Button type="primary" htmlType="submit">
                            Save All Changes
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}