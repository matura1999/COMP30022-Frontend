import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  SolutionOutlined,
  BookOutlined,
  BarChartOutlined,
  UploadOutlined,
  AppstoreOutlined,
  FileOutlined,
  FileAddOutlined,
  CameraOutlined,
  EditOutlined,
  PictureOutlined,
  FileTextOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default class Sider extends Component {
  menu = (
    <Menu
      mode="inline"
      defaultSelectedKeys={this.props.selectKey}
      defaultOpenKeys={this.props.openKey}
      style={{ height: "100%" }}
    >
      <SubMenu key="userInfo" icon={<IdcardOutlined />} title="User Info">
        <Menu.Item key="basic">
          <Link exact to="/userCentre/userInfo/basic">
            <SolutionOutlined />
            Basic Info
          </Link>
        </Menu.Item>
        <Menu.Item key="education">
          <Link exact to="/userCentre/userInfo/education">
            <BookOutlined />
            Educational Background
          </Link>
        </Menu.Item>
        <Menu.Item key="work">
          <Link exact to="/userCentre/userInfo/work">
            <BarChartOutlined />
            Work Experience
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="uploadContent" icon={<UploadOutlined />} title="Upload Content">
        <Menu.Item key="filesUpload">
          <Link exact to="/userCentre/uploadContent/filesUpload">
            <FileAddOutlined />
            Upload Files
          </Link>
        </Menu.Item>
        <Menu.Item key="mediasUpload">
          <Link exact to="/userCentre/uploadContent/mediasUpload">
            <CameraOutlined />
            Upload Medias
          </Link>
        </Menu.Item>
        <Menu.Item key="essaysUpload">
          <Link exact to="/userCentre/uploadContent/essaysUpload">
            <EditOutlined />
            Write Essays
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="manageContent" icon={<AppstoreOutlined />} title="Manage Content">
        <Menu.Item key="filesManagement">
          <Link exact to="/userCentre/manageContent/filesManagement">
            <FileOutlined />
            Manage Files
          </Link>
        </Menu.Item>
        <Menu.Item key="mediasManagement">
          <Link exact to="/userCentre/manageContent/mediasManagement">
            <PictureOutlined />
            Manage Medias
          </Link>
        </Menu.Item>
        <Menu.Item key="essaysManage">
          <Link exact to="/userCentre/manageContent/essaysManage">
            <FileTextOutlined />
            Manage Essays
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
  render() {
    return this.menu;
  }
}
