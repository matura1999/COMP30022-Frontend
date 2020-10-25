import React, { Component } from "react";
import { Upload, Button, Form, Input, Divider, Space, message } from "antd";
import "./uploadEssays.css";
import reqwest from 'reqwest';


export default class UploadEssays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
        };
    }


    beforeUpload = info => {
        this.setState({ fileList: [info] });
        return false;
    }

    handleRemove = () => {
        this.setState({ fileList: [] })
    };

    onFinish = (values) => {
        const { fileList} = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('file', file);
        });
        
        formData.append('username', sessionStorage.getItem('username'))
        formData.append('title', values.title)
        formData.append('content', values.body)
        formData.append('date', new Date())
        reqwest({
            url: 'https://mojito-portfolio-backend.herokuapp.com/files/essay',
            method: 'PUT',
            processData: false,
            data: formData,
            success: () => {
                this.setState({
                    fileList: [],
                });
                message.success(`Uploaded successfully.`);
            },

            error: () => {
                this.setState({
                    uploading: false,
                });
                message.error('Upload failed.');
            },
        });
    };

    render() {
        const {fileList} = this.state
        const props = {
            beforeUpload: this.beforeUpload,
            onRemove: this.handleRemove,
            fileList
        };

        return (
            <div className="essay_component">

                <Form name="nest-messages" onFinish={this.onFinish} id="essay_component">
                    <Form.Item name='title' placeholder="Enter Title Here">
                        <Input placeholder="Enter Title Here" bordered={false} />
                    </Form.Item>
                    <Divider />
                    <Form.Item name='body' >
                        <Input.TextArea rows={10} placeholder="Enter Content Here" bordered={false} />
                    </Form.Item>
                    <Divider />
                    <Upload {...props}
                        showUploadList={true}
                        accept=".jpg,.png,.jpeg"
                    >
                        <Button>
                            Upload Thumbnail
                    </Button>
                    </Upload>

                    <Divider />

                    <Form.Item>    <Space size={"middle"}>
                        <Button className="userCentre__formButton"
                            type="primary"
                            htmlType="submit"
                            size="large"
                        >
                            Submit Now
                    </Button>
                    </Space>
                    </Form.Item>


                </Form>

            </div>
        )
    }
}