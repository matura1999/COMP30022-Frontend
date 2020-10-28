import React, { Component } from "react";
import {Spin} from "antd";
import "./portfolioInfo.scss";

export default class PortfolioInfoWork extends Component {
    constructor(props){
        super(props);
        this.state = {
            records: [],
            user: this.props.user,
            loading: true
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
        await fetch('https://mojito-portfolio-backend.herokuapp.com/user/info/work/' + this.state.user, requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.success === false) {
                    this.setState({loading: false})
                } else {
                    this.setState({records:res.data.records, loading: false})
                }
            })
    }

    render(){
        const {loading} = this.state;
        if (loading) {
            return (
                <div className="portfolioInfo__recordsContainer">
                    <div className="loadingSpin">
                        <Spin
                            size="large"
                            tip="Loading..."
                        />
                    </div>
                </div>
            )
        }else{
            return(
                <div className="portfolioInfo__recordsContainer">
                    {this.state.records.map(record=>(
                        <div className="portfolioInfo__recordContainer" >
                            <div className="portfolioInfo__recordTitle">
                                {record.dateRange[0].slice(0,10)}{" ~ "}{record.dateRange[1].slice(0,10)}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{record.company}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{record.job}<br/>
                            </div>
                            <div className="portfolioInfo__recordDesc">
                                {record.job_desc}
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }
}