import React, { Component } from "react";
import {Row, Col,} from "antd";
import "./portfolioInfo.scss";

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
            <div className="portfolioInfo__recordsContainer">
                <div className="portfolioInfo__recordContainer" >
                    <Row className="portfolioInfo__recordTitle">
                        <Col span={7}>
                            DoB: {this.state.dob}
                        </Col>
                        <Col span={6}>
                            Phone: {this.displaySlashInstead(this.state.phone)}
                        </Col>
                        <Col span={11}>
                            Email: {this.displaySlashInstead(this.state.email)}
                        </Col>
                    </Row>
                </div>
            </div>
            )
        }
}