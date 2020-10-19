import { Input, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import React, { Component } from "react";

export default class EditDescriptionModal extends React.Component {
  state = {
    visible: false,
    currentDescription: this.props.description,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    console.log(this.state.currentDescription);
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      currentDescription: e.target.value,
    });
  };

  render() {
    const { TextArea } = Input;
    return (
      <>
        <EditOutlined key="edit" onClick={this.showModal} />
        <Modal
          title="Edit Description"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <TextArea
            defaultValue={this.state.currentDescription}
            onChange={this.handleDescriptionChange}
            id="text"
            rows={4}
            allowClear
          />
        </Modal>
      </>
    );
  }
}
