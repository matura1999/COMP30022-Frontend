import React, { Component } from "react";
import {Button, Form, Input} from "antd";

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

export default class UploadEssays extends Component {
    onFinish = (values) => {
        console.log(values);
    };

    render() {
        return (
            <div> <br></br>
            <Form {...layout} name="nest-messages" onFinish={this.onFinish}>
                <Form.Item name='title' label="Title">
                    <Input/>
                </Form.Item>
                <Form.Item name='body' label="Body">
                    <Input.TextArea rows={10}/>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 4}}>
                    <Button type="primary" htmlType="submit">
                        Upload!
                    </Button>
                </Form.Item>
            </Form>
            </div>
        )
    }
}