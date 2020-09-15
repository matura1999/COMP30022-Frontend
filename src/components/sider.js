import React, { Component } from "react";
import { Link } from "react-router-dom";
//import "../styles/sider.css"
import { Menu } from 'antd';
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
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Sider extends Component {
    constructor(props){
        super(props)
    }

    menu = (
        <Menu
            mode="inline"
            defaultSelectedKeys={this.props.selectKey}
            defaultOpenKeys={this.props.openKey}
            style={{ height: '100%' }}
        >
            <SubMenu key="sub1" icon={<IdcardOutlined />} title="User Info">
                <Menu.Item key="1" >
                    <Link exact to='/userCenter/userInfo/basic'><SolutionOutlined />Basic Info</Link>
                </Menu.Item>
                <Menu.Item key="2" >
                    <Link exact to='/userCenter/userInfo/education'><BookOutlined />Educational Background</Link>
                </Menu.Item>
                <Menu.Item key="3" >
                    <Link exact to='/userCenter/userInfo/work'><BarChartOutlined />Work Experience</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UploadOutlined />} title="Upload Content">
                <Menu.Item key="4" >
                    <Link exact to='/userCenter/uploadContent/files'><FileAddOutlined />Upload Files</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link exact to='/userCenter/uploadContent/medias'><CameraOutlined />Upload Medias</Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link exact to='/userCenter/uploadContent/essays'><EditOutlined />Write Essays</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Manage Content">
                <Menu.Item key="7">
                    <Link exact to='/userCenter/manageContent/files'><FileOutlined />Manage Files</Link>
                </Menu.Item>
                <Menu.Item key="8">
                    <Link exact to='/userCenter/manageContent/medias'><PictureOutlined />Manage Medias</Link>
                </Menu.Item>
                <Menu.Item key="9">
                    <Link exact to='/userCenter/manageContent/essays'><FileTextOutlined />Manage Essays</Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    )
    render() {
        return (
            this.menu
        )
    }
}

