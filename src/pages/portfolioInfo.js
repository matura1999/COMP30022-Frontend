import React, { Component } from "react";
import {Divider, } from "antd";
import PortfolioInfoBasic from "../components/portfolioInfoBasic";
import PortfolioInfoEdu from "../components/portfolioInfoEdu";
import PortfolioInfoWork from "../components/portfolioInfoWork";

export default class portfolioFiles extends Component {
    render() {
        return (
            <div>
                <Divider orientation="left">Basic Information</Divider>
                <PortfolioInfoBasic/>
                <Divider orientation="left">Educational Background</Divider>
                <PortfolioInfoEdu/>
                <Divider orientation="left">Work Experience</Divider>
                <PortfolioInfoWork/>
            </div>
        );
    }
}