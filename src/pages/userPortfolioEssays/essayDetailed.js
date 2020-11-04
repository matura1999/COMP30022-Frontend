import React, { Component } from "react";
import "./essayDetailed.css";
import PortfolioEssays from "./portfolioEssays";
import { Link } from "react-router-dom";
import { Image, Button } from "antd";
import {
    LeftOutlined
} from "@ant-design/icons";

export default class essayDetailed extends Component {
  constructor(props) {
    super(props);
      this.state = {
          user: this.props.user,
      };
  }
    handleClick = (e) => {
        this.setState({ user: e.key });
    };
  render() {
    const { user } = this.state;
    return (
      <div className="essay_details">
        <div className="essay_details_back">
            <Link
                to={{ pathname: '/userPortfolio/' + user + '/essays',}
                }
                user={user}
            ><Button
                type="default"
                size="large"
                className="essay_details_back"
            ><LeftOutlined />Return to All Essays</Button>
            </Link>
        </div>

        <div className="essay_details_title">{this.props.essay.name}</div>
        <div className="essay_details_date">{this.props.essay.date}</div>
        {/*<div className="essay_details_user">{this.props.user}</div>*/}
        <div className="essay_details_content">{this.props.essay.content}</div>
          <div className="essay_details_thumbnail">
              {
                  <Image
                      className="essay_details_picture"
                      src={this.props.essay.thumbnail}
                      alt="THUMBNAIL"
                  />
              }
          </div>

      </div>
    );
  }
}
