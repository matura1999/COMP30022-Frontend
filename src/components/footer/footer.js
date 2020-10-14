import React, { Component } from "react";
import { Row, Col } from "antd";
import "./footer.css";

export default class Footer extends Component {
    render(){
        return(
            <Row>
                <Col span={24}>
                    <div class="footer">
                        Mojito Online Portfolio ©2020 Created by Team Mojito
                    </div>
                </Col>
            </Row>
        );
    }
}