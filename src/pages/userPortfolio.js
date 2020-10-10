import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/userPortfolio.css";
import {Menu, Row, Col, Avatar} from "antd";
import Footer from "../components/footer";
import PortfolioInfo from "./portfolioInfo.js";
import PortfolioFiles from "./portfolioFiles.js";
import PortfolioMedias from "./portfolioMedias.js";
import PortfolioEssays from "./portfolioEssays.js";
import {
    IdcardOutlined,
    FileOutlined,
    PictureOutlined,
    FileTextOutlined,
    UserOutlined,
} from "@ant-design/icons";

let selectKey = "info";

export default class UserPortfolio extends Component {
    handleClick = e => {
        console.log('click ', e.key);
        this.setState({ current: e.key });
    };

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            current: 'info',
        };
        this.setUpMenu(props.match.params.path, props.match.params.subpath);
    }

    setUpMenu = (path) => {
        if (path === "info") {
            selectKey = "info";
        } else if (path === "medias"){
            selectKey = "medias";
        } else if (path === "essays"){
            selectKey = "essays";
        } else if (path === "files"){
            selectKey = "files";
        }
    };

    showContent = () => {
        console.log();
        switch (window.location.pathname) {
            case "/userPortfolio/info":
                return <PortfolioInfo />;
            case "/userPortfolio/files":
                return <PortfolioFiles />;
            case "/userPortfolio/medias":
                return <PortfolioMedias />;
            case "/userPortfolio/essays":
                return <PortfolioEssays />;
        }
    };

    render() {
        const { current } = this.state;
        return (
            <div className="all-but-header">
                <Row>
                    <Col span={18} offset={3}>
                        <div class="avatar-and-menu">
                            <div class="portfolio-avatar">
                                <Avatar style={{backgroundColor: '#8dc63f'}} size={80} icon={<UserOutlined/>}/>
                                </div>
                            <h2>The Meme Lord</h2>
                            <h3>I'm the ultimate memer.</h3>
                            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                                <Menu.Item key="info" icon={<IdcardOutlined />}>
                                    <Link exact to="/userPortfolio/info">
                                        Info
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="files" icon={<FileOutlined />}>
                                    <Link exact to="/userPortfolio/files">
                                        Files
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="medias" icon={<PictureOutlined />}>
                                    <Link exact to="/userPortfolio/medias">
                                        Medias
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="essays" icon={<FileTextOutlined />}>
                                    <Link exact to="/userPortfolio/essays">
                                        Essays
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div class="portfolio-content" style={{ height: "800px" }}>
                            {this.showContent()}
                        </div>
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}
