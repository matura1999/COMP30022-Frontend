import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Upload, Button, message, Modal, Input } from 'antd';
import {PlusOutlined, UploadOutlined} from '@ant-design/icons';
import reqwest from 'reqwest';
import { Row, Col } from 'antd';
import "./uploadMedia.css";

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default class UploadMedias extends Component {
    state = {
        fileList: [],
        uploading: false,
        previewVisible: false,
        descriptionBox:false,
        previewImage: '',
        previewTitle: '',
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList , descriptionBox: true,},);

    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files[]', file);
        });

        this.setState({
            uploading: true,
        });

        // You can use any AJAX library you like
        reqwest({
            url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            method: 'post',
            processData: false,
            data: formData,
            success: () => {
                this.setState({
                    fileList: [],
                    uploading: false,
                    descriptionBox: false,
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
        const { previewVisible, descriptionBox, previewImage, previewTitle, uploading, fileList } = this.state;
        const { TextArea } = Input;
        const onChange = e => {
            console.log(e);
        };
        let description
        if (descriptionBox) {
            description = (
                <div className="description">
                    <br />
                    <TextArea placeholder="Enter Description Here"
                              allowClear
                              onChange={onChange}
                              rows={5}
                              // showCount maxLength={100}
                    />
                </div>)
        }
        const uploadButton = (
            <div className="description">
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Add Media</div>
            </div>
        );
        const props = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }));
                return false;
            },
            fileList,
        };

        return (
            <>
                <Row justify="center">
                    <Col>
                <div className="add-media">
                    <Upload     {...props}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}>
                        {fileList.length >= 5 ? null : uploadButton}
                    </Upload>
                    <Modal
                        visible={previewVisible}
                        title={previewTitle}
                        footer={null}
                        onCancel={this.handleCancel}
                    >
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={20}>
                {description}
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                <div className="start-upload">
                    <Button
                        type="primary"
                        onClick={this.handleUpload}
                        disabled={fileList.length === 0}
                        loading={uploading}
                        size="large"
                        style={{ marginTop: 16 , backgroundColor: "#8dc63f"}}
                    >
                        {uploading ? 'Uploading' : 'Upload Now'}
                    </Button>
                </div>
                    </Col>
                </Row>
            </>
        );
    }

}
