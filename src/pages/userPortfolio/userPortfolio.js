import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, } from "antd";
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
import EssayDetailed from "../userPortfolioEssays/essayDetailed"
import UserPortfolioNameCard from "./userPortfolioNameCard";
import "./userPortfolio.scss";

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
        if(window.location.href.split('/').pop() === "essays"){
          return <PortfolioEssays user={user}/>;
        } else {
          const essayID = window.location.href.split('/').pop().slice(7,)
          return <EssayDetailed id={essayID} username={user}/>
        }
      default:
        return <h1>Page Not Found</h1>
    }
  };

  render() {
    const { current, user } = this.state;
    return (
      <div className="userPortfolio__body">
        <div className="userPortfolio__nameCardAndMenu">
            <UserPortfolioNameCard user={user}/>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
            >
              <Menu.Item key="info" icon={<IdcardOutlined />}>
                <Link exact to={"/userPortfolio/" + this.state.user + "/info"}>
                  Info
                </Link>
              </Menu.Item>
              <Menu.Item key="files" icon={<FileOutlined />}>
                <Link exact to={"/userPortfolio/" + this.state.user + "/files"}>
                  Files
                </Link>
              </Menu.Item>
              <Menu.Item key="medias" icon={<PictureOutlined />}>
                <Link exact to={"/userPortfolio/" + this.state.user + "/medias"}>
                  Medias
                </Link>
              </Menu.Item>
              <Menu.Item key="essays" icon={<FileTextOutlined />}>
                <Link exact to={"/userPortfolio/" + this.state.user + "/essays"}>
                  Essays
                </Link>
              </Menu.Item>
            </Menu>
        </div>
        <div className="userPortfolio__content" >
          {this.showContent()}
        </div>
        <div className="userPortfolio__footer">
          <Footer />
        </div>
      </div>
    );
  }
}
