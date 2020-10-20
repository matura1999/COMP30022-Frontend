import React, { Component } from "react";
import {Row, Col,} from "antd";
import PortfolioInfoBasic from "./portfolioInfoBasic";
import PortfolioInfoEdu from "./portfolioInfoEdu";
import PortfolioInfoWork from "./portfolioInfoWork";
import "./portfolioInfo.scss";

export default class portfolioFiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
        };
    }

    render() {
        const { user } = this.state;
        return (
            <div className="portfolioInfo__body">
                <div className="portfolioInfo__title">
                    Basic Information
                </div>
                <PortfolioInfoBasic user={user}/>
                <div className="portfolioInfo__title">
                Educational Background
                </div>
                <PortfolioInfoEdu user={user}/>
                <div className="portfolioInfo__title">
                             Work Experience
                </div>
                <PortfolioInfoWork user={user}/>
            </div>
        );
    }
}