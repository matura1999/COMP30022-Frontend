import React, { Component } from "react";
import { Form, Input, Button, Space, DatePicker, Row, Col, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export default class UserInfoEdu extends Component {
    onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    render() {
        return (
            <Form name="eduInfo" onFinish={this.onFinish} autoComplete="off">
                <Form.List name="users">
                    {(fields, { add, remove }) => {
                        return (
                            <div>
                                {fields.map(field => (
                                    <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <Form.Item
                                                    name = "level"
                                                    rules={[{ required: true, message: 'Please select level of education! ' }]}
                                                >
                                                    <Select>
                                                        <Select.Option value="secondary">Secondary Education</Select.Option>
                                                        <Select.Option value="subDegree">Sub-degree</Select.Option>
                                                        <Select.Option value="bachelor">Bachelor</Select.Option>
                                                        <Select.Option value="postgraduate">Postgraduate</Select.Option>
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item
                                                    name="institution"
                                                    rules={[{ required: true, message: 'Missing institution name' }]}
                                                >
                                                    <Input placeholder="Institution" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item name="major">
                                                    <Input placeholder="Major (optional)" />
                                                </Form.Item>
                                            </Col>
                                        </Row>

                                        <MinusCircleOutlined
                                            onClick={() => {
                                                remove(field.name);
                                            }}
                                        />
                                    </Space>
                                ))}

                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => {
                                            add();
                                        }}
                                        block
                                    >
                                        <PlusOutlined /> Add Record
                                    </Button>
                                </Form.Item>
                            </div>
                        );
                    }}
                </Form.List>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}