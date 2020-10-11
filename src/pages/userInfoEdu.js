import React, { Component } from "react";
import { Form, Input, Button, Space, Row, Col, Select, message} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export default class UserInfoEdu extends Component {
    constructor(props){
        super(props);
        this.state = {
            fields: []
        }
    }
    onFinish = (values) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ username: sessionStorage.getItem('username'), records: values.records })
        };
        fetch('https://mojito-portfolio-backend.herokuapp.com/user/info/education', requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.success === false) {
                    setTimeout(() => {
                        
                    }, 300);
                } else {
                    message.success(`Your changes have been saved.`);
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
        await fetch('https://mojito-portfolio-backend.herokuapp.com/user/info/education/' + sessionStorage.getItem('username'), requestOptions)
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

    

    render() {
        return (
            <Form name="edu-info" onFinish={this.onFinish} autoComplete="off">
                <Form.List name="records">
                    {(fields, { add, remove }) => {
                        console.log(fields)
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
                                        <PlusOutlined /> Add Education Record
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