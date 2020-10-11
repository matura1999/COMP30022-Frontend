import React, { Component } from "react";
import {Descriptions,} from "antd";

export default class PortfolioInfoBasic extends Component {
    constructor(props_basic) {
        super(props_basic);
        this.state = {
            name: '',
            intro: ''
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
        await fetch('https://mojito-portfolio-backend.herokuapp.com/user/info/basic/' + sessionStorage.getItem('username'), requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.success === false) {
                    setTimeout(() => {

                    }, 300);
                } else {
                    // return data, include all basic user information
                    const data = res.data;
                    var dob = null;
                    if(data.dob){
                        dob = new Date(data.dob);
                    }
                    this.setState({ name: data.name, dob: dob.toDateString(), phone: data.phone, email: data.email, intro: data.self_intro })
                }
            })
    }

    render(){
        return(
            <Descriptions className="portfolio-descriptions">
                <Descriptions.Item label="Date of Birth">{this.state.dob}</Descriptions.Item>
                <Descriptions.Item label="Phone">{this.state.phone}</Descriptions.Item>
                <Descriptions.Item label="Email">{this.state.email}</Descriptions.Item>
            </Descriptions>
        )
    }
}