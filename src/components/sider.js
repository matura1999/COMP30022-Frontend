import React, { Component } from "react";
import {Link} from "react-router-dom";
//import "../styles/sider.css"
import { Menu, Button, Layout, Breadcrumb } from 'antd';
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

    menu = (
        <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', backgroundColor: '#e6edea'}}
        >
        <SubMenu key="sub1" icon={<IdcardOutlined/>} title="User Info">
            <Menu.Item key="1" >
                <Link exact to='/userInfo-basic'><SolutionOutlined/>Basic Info</Link>
            </Menu.Item>
            <Menu.Item key="2" >
                <Link exact to='/userInfo-education'><BookOutlined />Educational Background</Link>
            </Menu.Item>
            <Menu.Item key="3" >
                <Link exact to='/userInfo-work'><BarChartOutlined/>Work Experience</Link>
            </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UploadOutlined/>} title="Upload Content">
                <Menu.Item key="5" >
                <Link exact to='/uploadContent-files'><FileAddOutlined />Upload Files</Link>
            </Menu.Item>
            <Menu.Item key="6">
                <Link exact to='/uploadContent-medias'><CameraOutlined />Upload Medias</Link>
            </Menu.Item>
            <Menu.Item key="7">
                <Link exact to='/uploadContent-essays'><EditOutlined />Write Essays</Link>
            </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Manage Content">
                <Menu.Item key="8">
                <Link exact to='/manageContent-files'><FileOutlined />Manage Files</Link>
            </Menu.Item>
            <Menu.Item key="9">
                <Link exact to='/manageContent-medias'><PictureOutlined />Manage Medias</Link>
            </Menu.Item>
            <Menu.Item key="10">
                <Link exact to='/manageContent-essays'><FileTextOutlined/>Manage Essays</Link>
            </Menu.Item>
            </SubMenu>
        </Menu>
    )
    render(){
        return(
            this.menu
        )
    }
}

