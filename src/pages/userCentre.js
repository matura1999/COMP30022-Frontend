import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../styles/userCentre.css"
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
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class UserCentre extends Component{
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render(){
        return (
            <Layout>
                <div class="banner">User Centre</div>
                <Content style={{ padding: '0 120px' }}>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={240}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <Menu.Item key="1" >
                                    <SolutionOutlined/>Basic Info
                                </Menu.Item>
                                <Menu.Item key="2" >
                                    <BookOutlined />Educational Background
                                </Menu.Item>
                                <Menu.Item key="3" >
                                    <BarChartOutlined/>Work Experience
                                </Menu.Item>
                                <SubMenu key="sub1" icon={<UploadOutlined/>} title="Upload Content">
                                    <Menu.Item key="5"><FileAddOutlined />Upload Files</Menu.Item>
                                    <Menu.Item key="6"><CameraOutlined />Upload Medias</Menu.Item>
                                    <Menu.Item key="7"><EditOutlined />Write Essays</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Manage Content">
                                    <Menu.Item key="8"><FileOutlined />Manage Files</Menu.Item>
                                    <Menu.Item key="9"><PictureOutlined />Manage Medias</Menu.Item>
                                    <Menu.Item key="10"><FileTextOutlined/>Manage Essays</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 480}}>This site is under heavy construction. </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Mojito Online Portfolio ©2020 Created by Team Mojito</Footer>
            </Layout>
        );
    }
}