import React, { Component } from "react";
import Sider from "../components/sider"
import "../styles/userCentre.css"
import { Row, Col } from 'antd';
import UserInfoBasic from './userInfoBasic'
import UserInfoEdu from './userInfoEdu'
import UserInfoWork from './userInfoWork'
import UploadFiles from './uploadFiles'
import UploadMedias from './uploadMedias'
import UploadEssays from './uploadEssays'
import ManageMedias from './manageMedias'
import ManageFiles from './manageFiles'
import ManageEssays from './manageEssays'

let selectKey = '1';
let openKey = 'sub1';
export default class UserPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
        this.setUpMenu(props.match.params.path, props.match.params.subpath)
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    setUpMenu = (path, subpath) => {
        if (path === "userInfo"){
            openKey = 'sub1'
            if (subpath === 'basic'){
                selectKey = '1';
            } else if (subpath === 'education'){
                selectKey = '2';
            }
            else if (subpath === 'work'){
                selectKey = '3';
            }
        } else if (path === "uploadContent"){
            openKey = 'sub2'
            if (subpath === 'files'){
                selectKey = '4';
            } else if (subpath === 'medias'){
                selectKey = '5';
            }
            else if (subpath === 'essays'){
                selectKey = '6';
            }
        } else if (path === "manageContent"){
            openKey = 'sub3'
            if (subpath === 'files'){
                selectKey = '7';
            } else if (subpath === 'medias'){
                selectKey = '8';
            }
            else if (subpath === 'essays'){
                selectKey = '9';
            }
        }
    };

    showContent = () => {
        console.log();
        switch (window.location.pathname){
            case '/userCenter/userInfo/basic':
                return <UserInfoBasic/>
            case '/userCenter/userInfo/education':
                return <UserInfoEdu/>
            case '/userCenter/userInfo/work':
                return <UserInfoWork/>
            case '/userCenter/uploadContent/files':
                return <UploadFiles/>
            case '/userCenter/uploadContent/medias':
                return <UploadMedias/>
            case '/userCenter/uploadContent/essays':
                return <UploadEssays/>
            case '/userCenter/manageContent/files':
                return <ManageFiles/>
            case '/userCenter/manageContent/medias':
                return <ManageMedias/>
            case '/userCenter/manageContent/essays':
                return <ManageEssays/>
        }
    }


    render() {
        return (
            <div class="all-but-header">
                <div class="banner"><h1>User Centre</h1></div>
                <Row>
                    <Col span={3}></Col>
                    <Col span={18}>
                        <div className="sider-and-content">
                            <Row>
                                <Col span={6} align={'middle'} >
                                    <Sider selectKey = {[selectKey]} openKey={[openKey]}/>
                                </Col>
                                <Col span={18} offset={0} style={{height:"600px"}}>
                                    <div class="content">{this.showContent()}</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={3}></Col>
                </Row>


                <Row>
                    <Col span={24}>
                        <div class="footer">Mojito Online Portfolio ©2020 Created by Team Mojito</div>
                    </Col>
                </Row>
            </div>


        );
    }
}