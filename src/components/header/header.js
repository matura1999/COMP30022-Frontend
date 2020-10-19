import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import HeaderRight from "./headerRight";
import "./header.scss";

export default class Header extends Component {
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
              <form className="header__searchBar" action="/searchResult">
                <input
                    className="header__searchInput"
                    type="text"
                    placeholder="Search Portfolio by Name"
                    name="name"
                />
                <button className="header__searchButton" type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
          </Col>
          <Col span={7} offset={1} className="header__headerRightContainer">
              <HeaderRight />
          </Col>
      </Row>
    );
  }
}
