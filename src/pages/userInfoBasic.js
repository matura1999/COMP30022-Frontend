import React, { Component } from "react";
import Sider from "../components/sider"
import {Link} from "react-router-dom";
import "../styles/userCentre.css"
import { Menu, Button, Layout } from 'antd';


export default class UserInfoBasic extends Component{
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
            <div class = "all-but-header">
                <div class="banner">User Centre</div>
                    <div class="sider-and-content">
                        <Sider/>
                        <div class = "content">This site is under heavy construction. </div>
                    </div>
                <div class = "footer">Mojito Online Portfolio ©2020 Created by Team Mojito</div>
            </div>
        );
    }
}