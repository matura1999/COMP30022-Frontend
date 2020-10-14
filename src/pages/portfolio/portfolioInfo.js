import React, { Component } from "react";
import {Divider, } from "antd";
import PortfolioInfoBasic from "../../components/portfolio_Info/portfolioInfoBasic";
import PortfolioInfoEdu from "../../components/portfolio_Info/portfolioInfoEdu";
import PortfolioInfoWork from "../../components/portfolio_Info/portfolioInfoWork";

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