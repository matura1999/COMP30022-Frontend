import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import "./header.css";
import HeaderRight from "./header-right";

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
      <Row className="navbar" justify="center" align="middle">
        <Col span={1}></Col>
        <Col span={7}>
          <div className="logo" onClick={this.backToHome}>
            🍋Mojito
          </div>
        </Col>
        <Col span={7}>
          <form className="search-bar" action="/search">
            <input
              type="text"
              placeholder="Search Portfolio"
              name="name"
            />
            <button className="search-button" type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </Col>

        <Col span={8}>
          <HeaderRight />
        </Col>
        <Col span={1}></Col>
      </Row>
    );
  }
}
