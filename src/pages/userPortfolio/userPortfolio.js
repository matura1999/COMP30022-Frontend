import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Col } from "antd";
import {
  IdcardOutlined,
  FileOutlined,
  PictureOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Footer from "../../components/footer/footer";
import PortfolioInfo from "../userPortfolioInfo/portfolioInfo";
import PortfolioFiles from "../userPortfolioFiles/portfolioFiles";
import PortfolioMedias from "../userPortfolioMedias/portfolioMedias";
import PortfolioEssays from "../userPortfolioEssays/portfolioEssays";
import PortfolioNameCard from "./portfolioNameCard";
import "./userPortfolio.css";

export default class UserPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      current: props.match.params.path,
      user: props.match.params.username
    };
  }
  
  handleClick = (e) => {
    console.log("click ", e.key);
    this.setState({ current: e.key });
  };

  showContent = () => {
    const { user } = this.state;
    switch (this.state.current) {
      case "info":
        return <PortfolioInfo user={user}/>;
      case "files":
        return <PortfolioFiles user={user}/>;
      case "medias":
        return <PortfolioMedias user={user}/>;
      case "essays":
        return <PortfolioEssays user={user}/>;
    }
  };

  render() {
    const { current, user } = this.state;
    return (
      <div className="portfolio-all-but-header">
        <Col span={18} offset={3}>
          <div class="name-card-and-menu">
            <PortfolioNameCard user={user}/>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
              <Menu.Item key="info" icon={<IdcardOutlined />}>
                <Link exact to={"/userPortfolio/" + sessionStorage.getItem('username') + "/info"}>
                  Info
                </Link>
              </Menu.Item>
              <Menu.Item key="files" icon={<FileOutlined />}>
                <Link exact to={"/userPortfolio/" + sessionStorage.getItem('username') + "/files"}>
                  Files
                </Link>
              </Menu.Item>
              <Menu.Item key="medias" icon={<PictureOutlined />}>
                <Link exact to={"/userPortfolio/" + sessionStorage.getItem('username') + "/medias"}>
                  Medias
                </Link>
              </Menu.Item>
              <Menu.Item key="essays" icon={<FileTextOutlined />}>
                <Link exact to={"/userPortfolio/" + sessionStorage.getItem('username') + "/essays"}>
                  Essays
                </Link>
              </Menu.Item>
            </Menu>
          </div>
          <div class="portfolio-content" style={{ height: "auto" }}>
            {this.showContent()}
          </div>
        </Col>
        <div className="portfolio__footer">
          <Footer />
        </div>
      </div>
    );
  }
}
