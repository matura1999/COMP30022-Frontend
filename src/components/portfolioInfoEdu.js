import React, { Component } from "react";
import {Descriptions, Badge,} from "antd";

export default class PortfolioInfoEdu extends Component {
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
        await fetch('https://mojito-portfolio-backend.herokuapp.com/user/info/education/' + sessionStorage.getItem('username'), requestOptions)
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

    badgeStatus(record){
        if(record.status == "ongoing"){
            return(["processing","Ongoing"])
        }else{
            return(["default","Finished"])
        }
    }

    render(){
        return(
            <div>
            {this.state.records.map(record=>(
                <Descriptions className="portfolio-descriptions" >
                    <Descriptions.Item label="Level">{record.level}</Descriptions.Item>
                    <Descriptions.Item label="Institution">{record.institution}</Descriptions.Item>
                    <Descriptions.Item label="Major">{record.major}</Descriptions.Item>
                    <Descriptions.Item label="Status">
                        <Badge status={this.badgeStatus(record)[0]} text={this.badgeStatus(record)[1]} />
                    </Descriptions.Item>
                </Descriptions>
                ))}
            </div>
        );
    }
}