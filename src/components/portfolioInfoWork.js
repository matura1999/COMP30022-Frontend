import React, { Component } from "react";
import {Descriptions, Badge} from "antd";

export default class PortfolioInfoWork extends Component {
    constructor(props){
        super(props);
        this.state = {
            records: []
        }
    }

    componentDidMount = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        };
        await fetch('https://mojito-portfolio-backend.herokuapp.com/user/info/work/' + sessionStorage.getItem('username'), requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.success === false) {
                    setTimeout(() => {

                    }, 300);
                } else {
                    this.setState({records:res.data.records})
                }
                console.log(this.state.records)
            })
    }

    render(){
        return(
            <div>
                {this.state.records.map(record=>(
                    <Descriptions className="portfolio-descriptions">
                        <Descriptions.Item label="Date">
                            {record.dateRange[0].slice(0,10)}
                            &nbsp;~&nbsp;
                            {record.dateRange[1].slice(0,10)}
                        </Descriptions.Item>
                        <Descriptions.Item label="Company">{record.company}</Descriptions.Item>
                        <Descriptions.Item label="Job">{record.job}</Descriptions.Item>
                        <Descriptions.Item label="Job Description">{record.job_desc}</Descriptions.Item>
                    </Descriptions>
                ))}
            </div>
        )
    }
}