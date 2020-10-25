import { Button, Modal, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import React, { Component } from "react";

export default class EditEssayModal extends React.Component {
  state = {
    // loading: false,
    visible: false,

    currentTitle: this.props.title,
    currentContent: this.props.content,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    // this.setState({ loading: true });
    // setTimeout(() => {
    //   this.setState({ loading: false, visible: false });
    // }, 3000);
    console.log(this.state.currentTitle);
    console.log(this.state.currentContent);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({ visible: false });
  };

  handleTitleChange = (e) => {
    this.setState({
      currentTitle: e.target.value,
    });
  };

  handleContentChange = (e) => {
    this.setState({
      currentContent: e.target.value,
    });
  };

  render() {
    // const { visible, loading } = this.state;
    const { visible } = this.state;
    const { TextArea } = Input;
    return (
      <>
        <button className="essayItem__edit" onClick={this.showModal}>
          Edit
        </button>

        <Modal
          width={800}
          visible={visible}
          title="Edit essay"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button
              key="submit"
              type="primary"
              // loading={loading}
              onClick={this.handleOk}
            >
              Save
            </Button>,
          ]}
        >
          <TextArea
            className="essayItem__editTitle"
            defaultValue={this.state.currentTitle}
            onChange={this.handleTitleChange}
            id="text"
            rows={1}
            allowClear
          />
          <TextArea
            className="essayItem__editContent"
            defaultValue={this.state.currentContent}
            onChange={this.handleContentChange}
            id="text"
            rows={4}
            allowClear
          />
        </Modal>
      </>
    );
  }
}
