import React, { Component } from "react";
import { Form, Input, Button, Space, DatePicker, Row, Col, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export default class UserInfoEdu extends Component {
    onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    render() {
        return (
            <Form name="edu-info" onFinish={this.onFinish} autoComplete="off">
                <Form.List name="records">
                    {(fields, { add, remove }) => {
                        return (
                            <div>
                                {fields.map(field => (
                                    <Space key={field.key} align="baseline">
                                        <Row gutter={16}>
                                            <Col span={6}>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'level']}
                                                    fieldKey={[field.fieldKey, 'level']}
                                                    rules={[{ required: true, message: 'Please select level of education! ' }]}
                                                >
                                                    <Select style={{ width: 180 }} placeholder="Level">
                                                        <Select.Option value="secondary">Secondary Education</Select.Option>
                                                        <Select.Option value="subDegree">Sub-degree</Select.Option>
                                                        <Select.Option value="bachelor">Bachelor</Select.Option>
                                                        <Select.Option value="postgraduate">Postgraduate</Select.Option>
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'institution']}
                                                    fieldKey={[field.fieldKey, 'institution']}
                                                    rules={[{ required: true, message: 'Missing institution name' }]}
                                                >
                                                    <Input placeholder="Institution" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'major']}
                                                    fieldKey={[field.fieldKey, 'major']}
                                                >
                                                    <Input placeholder="Major (optional)" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'status']}
                                                    fieldKey={[field.fieldKey, 'status']}
                                                    rules={[{ required: true, message: 'Please select status! ' }]}
                                                >
                                                    <Select style={{ width: 180 }} placeholder="Status">
                                                        <Select.Option value="ongoing">Ongoing</Select.Option>
                                                        <Select.Option value="finished">Finished</Select.Option>
                                                    </Select>
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
                        Save
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}