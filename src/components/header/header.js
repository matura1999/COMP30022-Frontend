import React, { Component } from "react";
import { Col, Row, Input } from "antd";
import HeaderRight from "./headerRight";
import "./header.scss";

const { Search } = Input;

export default class Header extends Component {
    onSearch = (value) =>{
        window.location.href = "/searchResult?name="+ value;
    }

    backToHome = () => {
        window.location.href = "/";
    }

  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  render() {
    return (
      <Row className="header__navbar" justify="center" align="middle">
          <Col span={2} offset={1} className="header__logo" onClick={this.backToHome}>
              🍋Mojito
          </Col>
          <Col span={8} offset={5} className="header__searchBarContainer">
              <Search
                  className="header__searchBar"
                  placeholder="Search Portfolio by Name"
                  onSearch={this.onSearch}
                  htmlType="submit"
              />
          </Col>
          <Col span={6} offset={2} className="header__headerRightContainer">
              <HeaderRight />
          </Col>
      </Row>
    );
  }
}
