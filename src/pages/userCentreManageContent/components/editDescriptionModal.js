import { Input, Modal, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import reqwest from 'reqwest';
import url from '../../../assets/constant/constant'

export default class EditDescriptionModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      currentDescription: this.props.description,
      source: this.props.source
    };
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  StaticDataToFile(name) {
    var data = new Blob([this.state.currentDescription], { type: 'text/plain' });

    const file = new File([data], name + ".txt");
    return file;
  }

  handleOk = async (e) => {
    const formData = new FormData();
    formData.append('file', this.StaticDataToFile(this.state.source.split('/').pop()));
    formData.append('user', sessionStorage.getItem('username'))
    await reqwest({
      url: url.backendUrl + '/files/media',
      method: 'PUT',
      processData: false,
      data: formData,
      success: () => {
        message.success(`Description edit successfully.`);
      },

      error: () => {
        message.error('Description edit failed.');
      },
    });
    this.setState({
      visible: false,
    });
    window.location.reload()
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
