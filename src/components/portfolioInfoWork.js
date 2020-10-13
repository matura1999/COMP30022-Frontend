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

    inCaseOfNoRecord(){
        if(this.state.records.length < 1){
            return(<div className="portfolio-descriptions">This user has not uploaded his work experience.</div>)
        }else{
            {this.state.records.map(record=>(
                <Descriptions className="portfolio-descriptions" column={4}>
                    <Descriptions.Item label="Start Date">
                        {record.dateRange[0].slice(0,10)}
                    </Descriptions.Item>
                    <Descriptions.Item label="End Date">
                        {record.dateRange[1].slice(0,10)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Company">{record.company}</Descriptions.Item>
                    <Descriptions.Item label="Job">{record.job}</Descriptions.Item>
                    <Descriptions.Item label="Job Description">{record.job_desc}</Descriptions.Item>
                </Descriptions>
            ))}
        }
    }

    render(){
        return(
            <div>
                {this.inCaseOfNoRecord()}
            </div>
        )
    }
}