import React, { Component } from "react";
import {Upload, Button, Form, Input, Divider, Space} from "antd";
import "../styles/UserCentre/essay.css";


export default class UploadEssays extends Component {
    state = {
        fileList: [
            {
                uid: '-1',
                name: 'ateez_aoty.png',
                status: 'done',
                url: 'https://viewofthearts.files.wordpress.com/2020/07/a22c2b66305c46f0a800b5115caf1c46.jpeg',
            },
        ],
    };

    handleChange = info => {
        let fileList = [...info.fileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);

        // 2. Read from response and show file link
        fileList = fileList.map(file => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response.url;
            }
            return file;
        });

        this.setState({ fileList });
    };

    onFinish = (values) => {
        console.log(values);
    };

    render() {
        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange: this.handleChange,
            multiple: true,
        };

        return (
            <div className="upload">

            <Form name="nest-messages" onFinish={this.onFinish} id="upload">
                <Form.Item name='title' placeholder="Enter Title Here">
                    <Input placeholder="Enter Title Here" bordered={false}/>
                </Form.Item>
                <Divider />
                <Form.Item name='body' >
                    <Input.TextArea rows={10} placeholder="Enter Content Here" bordered={false}/>
                </Form.Item>
                <Divider />
                <Form.Item >
                    <Upload {...props} fileList={this.state.fileList}>
                        <Button htmlType="submit">
                            Upload Thumbnail
                        </Button>
                    </Upload>

                </Form.Item>
                <Divider />

                <Form.Item>    <Space size={"middle"}>
                    <Button type="primary" htmlType="submit" size="large" style={{ backgroundColor: "#8dc63f" }}>
                       Submit Now
                    </Button>
                    <Button type="primary" htmlType="submit" size="large" style={{ backgroundColor: "#8dc63f" }}>
                        Save Draft
                    </Button>  </Space>
                </Form.Item>


            </Form>

            </div>
        )
    }
}