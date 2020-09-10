import React, { Component } from "react";
import Sider from "../components/sider"
import {Link} from "react-router-dom";
import "../styles/userCentre.css"
import { Menu, Button, Layout, Row, Col } from 'antd';


export default class UserInfoBasic extends Component {
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
                <div class="banner"><h1>User Centre</h1></div>
                        <Row>
                            <Col span={3}></Col>
                            <Col span={18}>
                                <div className="sider-and-content">
                                <Row>
                                    <Col span={6} align={'middle'} >
                                        <Sider/>
                                    </Col>
                                    <Col span={12} offset={6} >
                                        <div class = "content">This site is under heavy construction. </div>
                                    </Col>
                                </Row>
                                </div>
                            </Col>
                            <Col span={3}></Col>
                        </Row>


                <Row>
                    <Col span={24}>
                    <div class = "footer">Mojito Online Portfolio ©2020 Created by Team Mojito</div>
                    </Col>
                </Row>
            </div>


        );
    }
}