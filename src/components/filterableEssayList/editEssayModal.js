import { Button, Modal, Input, Upload, message, Switch } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import reqwest from 'reqwest'

export default class EditEssayModal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fileList: [],
      visible: false,
      currentEssayId: this.props.id,
      currentTitle: this.props.title,
      currentContent: this.props.content,
      disabled: true,
      savedTitle: this.props.title,
      savedContent: this.props.content,
      uploading: false,
    };
  }
  
  componentDidUpdate(prevProps){
    if(prevProps.id !== this.props.id){
      this.setState({
        currentEssayId: this.props.id,
        currentTitle: this.props.title,
        currentContent: this.props.content,
        savedTitle: this.props.title,
        savedContent: this.props.content,
      })
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = async (e) => {
    const { fileList, currentContent, currentTitle, currentEssayId, disabled } = this.state;
    const formData = new FormData();
    if(disabled){
      formData.append('updateImage', false)
    } else {
      formData.append('updateImage', true)
      fileList.forEach(file => {
        formData.append('file', file);
      });
    }
    this.setState({
      uploading: true,
    });
    formData.append('username', sessionStorage.getItem('username'))
    formData.append('title', currentTitle)
    formData.append('content', currentContent)
    formData.append('date', new Date())
    formData.append('id', currentEssayId)
    
    await reqwest({
      url: 'https://mojito-portfolio-backend.herokuapp.com/files/essay',
      method: 'PUT',
      processData: false,
      data: formData,
      success: async () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        await message.success(`Essay updated successfully.`);
        
      },

      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('Essay update failed.');
      },
    });

    this.setState({
      visible: false,
    });
    window.location.reload();
  };

  handleCancel = (e) => {
    const {savedTitle, savedContent} = this.state;
    this.setState({ visible: false, fileList: [], disabled: true, currentContent:savedContent, currentTitle:savedTitle});
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

  beforeUpload = info => {
    if (info.type == "image/jpeg" || info.type == "image/png") {
      this.setState({ fileList: [info] });
    } else {
      message.error("Invalid file type, please upload a jpg/png image")
    }
    return false;
  }

  handleRemove = () => {
    this.setState({ fileList: [] })
  };

  onChange = (checked) => {
    this.setState({ disabled: !checked })
  }

  render() {
    const { fileList } = this.state
    const props = {
      beforeUpload: this.beforeUpload,
      onRemove: this.handleRemove,
      fileList
    };
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
          title="Edit Essay"
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
          <div className="essayItem__replaceThumbnailTitle">
            Replace the old thumbnail? &nbsp;&nbsp;
            <Switch
                defaultChecked={false}
                onChange={this.onChange}
                checkedChildren="Yes"
                unCheckedChildren="No">
            </Switch>
          </div>
          <Upload {...props}>
            <Button
              uploading={this.state.uploading}
              disabled={this.state.disabled}
              className="essayItem__uploadThumbnail"
              icon={<UploadOutlined />}
            >
              Upload Thumbnail
            </Button>
          </Upload>
        </Modal>
      </>
    );
  }
}
