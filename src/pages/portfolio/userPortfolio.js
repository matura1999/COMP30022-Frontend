import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/MyPortfolio/userPortfolio.css";
import { Menu, Row, Col } from "antd";
import Footer from "../../components/footer/footer";
import PortfolioInfo from "./portfolioInfo";
import PortfolioFiles from "./portfolioFiles";
import PortfolioMedias from "./portfolioMedias";
import PortfolioEssays from "./portfolioEssays";
import {
  IdcardOutlined,
  FileOutlined,
  PictureOutlined,
  FileTextOutlined,
  UserOutlined,
} from "@ant-design/icons";
import PortfolioNameCard from "../../components/portfolio_Info/portfolioNameCard";

let selectKey = "info";

export default class UserPortfolio extends Component {
  handleClick = (e) => {
    console.log("click ", e.key);
    this.setState({ current: e.key });
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      current: "info",
    };
    this.setUpMenu(props.match.params.path, props.match.params.subpath);
  }

  setUpMenu = (path) => {
    if (path === "info") {
      selectKey = "info";
    } else if (path === "medias") {
      selectKey = "medias";
    } else if (path === "essays") {
      selectKey = "essays";
    } else if (path === "files") {
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
      <div className="portfolio-all-but-header">
        <Col span={18} offset={3}>
          <div class="name-card-and-menu">
            <PortfolioNameCard />
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
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
