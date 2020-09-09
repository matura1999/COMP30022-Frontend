import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Avatar, Button, Menu, Dropdown, message} from 'antd'
import "../styles/header.css";
import {
    FolderViewOutlined,
    IdcardOutlined,
    UploadOutlined,
    AppstoreOutlined,
    UserOutlined,
    LogoutOutlined
}from '@ant-design/icons';

export default class HeaderRight extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: false,
        }
    }

    onLogout = () =>{
        sessionStorage.setItem('authorised', false);
        sessionStorage.removeItem('authorised')
    }

    menu = (
        <Menu>
            <Menu.Item>
                <Link exact to='/username/portfolio'>
                    <FolderViewOutlined/> My Portfolio
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link exact to='/userCentre'>
                    <IdcardOutlined/> User Centre
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link exact to='/username/uploadContent'>
                    <UploadOutlined/> Upload Content
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link exact to='/username/manageContent'>
                    <AppstoreOutlined/> Manage Content
                </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <a type="primary" block onClick={() => this.onLogout}>
                    <LogoutOutlined/> Sign out
                </a>
            </Menu.Item>
        </Menu>
    );
    
    render(){
        if (!sessionStorage.getItem('authorised')){
            return (
                <div class="sign-button-container">
                    <Link exact to="/signin" class="sign-in">
                        <button class="sign-in-button">Sign in</button>
                    </Link>
                    <Link exact to="/signup" class="sign-up">
                        <button class="sign-up-button">Sign up</button>
                    </Link>
                </div>
            )
        } else {
            return (
                <div class="sign-button-container">
                    <Dropdown overlay={this.menu} placement="bottomRight">
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <Avatar style={{ backgroundColor: '#8dc63f' }} icon={<UserOutlined />} />
                        </a>
                    </Dropdown>

                </div>
            )
        } 
    }
}