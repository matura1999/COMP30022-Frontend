import React, { Component } from "react";
import { Form, Input, Button, Space, DatePicker, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

export default class UserInfoWork extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: []
        }
    }

    onFinish = (values) => {
        console.log(values);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ username: sessionStorage.getItem('username'), records: values.records })
        };
        fetch('http://localhost:5000/user/info/work', requestOptions)
            .then(res => res.json())
            .then(res => {
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
        await fetch('http://localhost:5000/user/info/work/' + sessionStorage.getItem('username'), requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.success === false) {
                    setTimeout(() => {
                        
                    }, 300);
                } else {
                    for(const item of res.data.records){
                        this.state.fields.push(item)
                    }
                }
                console.log(this.state.fields)
            })
    }

    rangeConfig = {
        rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };

    render() {
        return (
            <Form name="work-info" onFinish={this.onFinish} autoComplete="off">
                <Form.List name="records">
                    {(fields, { add, remove }) => {
                        return (
                            <div>
                                {fields.map(field => (
                                    <Space key={field.key} align="baseline">
                                        <Row gutter={16}>
                                            <Col span={8}>
                                                <Form.Item name="range-picker"  {...this.rangeConfig}>
                                                    <RangePicker />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'company']}
                                                    fieldKey={[field.fieldKey, 'company']}
                                                    rules={[{ required: true, message: 'Missing company name' }]}
                                                >
                                                    <Input placeholder="Company" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={8}>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'job']}
                                                    fieldKey={[field.fieldKey, 'job']}
                                                    rules={[{ required: true, message: 'Missing job name' }]}
                                                >
                                                    <Input placeholder="Job" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={24}>
                                                <Form.Item
                                                    {...field}
                                                    name={[field.name, 'job-desc']}
                                                    fieldKey={[field.fieldKey, 'job-desc']}
                                                    rules={[{ required: true, message: 'Missing job description' }]}
                                                >
                                                    <Input.TextArea placeholder="Description" />
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
