import React, { Component } from "react";
import {Descriptions,} from "antd";
import "../userPortfolio/userPortfolio.scss";

export default class PortfolioInfoBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            intro: '',
            user: this.props.user,
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
        await fetch('https://mojito-portfolio-backend.herokuapp.com/user/info/basic/' + this.state.user, requestOptions)
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
                        dob = new Date(data.dob).toDateString();
                    } else{
                        dob = "\\"
                    }
                    this.setState({ name: data.name, dob: dob, phone: data.phone, email: data.email, intro: data.self_intro })
                }
            })
    }

    displaySlashInstead(item){
        if(!item){
            return("\\")
        }else{
            return(item)
        }
    }

    render(){
        return(
            <Descriptions className="userPortfolio__descriptions" column={4}>
                <Descriptions.Item label="Date of Birth">{this.state.dob}</Descriptions.Item>
                <Descriptions.Item label="Phone">{this.displaySlashInstead(this.state.phone)}</Descriptions.Item>
                <Descriptions.Item label="Email">{this.displaySlashInstead(this.state.email)}</Descriptions.Item>
            </Descriptions>
        )
    }
}