import React, { Component } from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import url from '../../assets/constant/constant'

const { Dragger } = Upload;
const sendingData = {user: sessionStorage.getItem('username'), path: 'files'};
const props = {
  name: "file",
  multiple: true,
  action: url.backendUrl + "/files",
  method: 'PUT',
  data: sendingData,
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
    }
    if (status === "done") {
      message.success(`${info.file.name} uploaded successfully.`);
    } else if (status === "error") {
      message.error(`upload failed.`);
    }
  },
};

export default class UploadFiles extends Component {
  render() {
    return (
      <Dragger {...props} showUploadList={false}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    );
  }
}
