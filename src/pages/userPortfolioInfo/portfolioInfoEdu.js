import React, { Component } from "react";
import { Empty, Spin } from 'antd';
import "./portfolioInfo.scss";
import url from '../../assets/constant/constant'

export default class PortfolioInfoEdu extends Component {
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
        await fetch(url.backendUrl + '/user/info/education/' + this.state.user, requestOptions)
            .then(res => res.json())
            .then(res => {
                if (res.success === false) {
                    this.setState({loading: false})
                } else {
                    this.setState({records:res.data.records, loading: false})
                }
            })
    }

    recordMajor(major){
        if(major == null){
            return ('None')
        }else{
            return major
        }
    }

    render(){
        const {loading} = this.state;
        if (loading) {
            return (
                <div className="loadingOrEmptyContainer">
                    <Spin className="spin" size="large" tip="Loading..."/>
                </div>
            )
        } else if (this.state.records.length < 1) {
            return(
                <div className="portfolioInfo__recordsContainer">
                    <Empty description={"This user has not uploaded any education record yet."}/>
                </div>
            )
        } else{
            return(
                <div className="portfolioInfo__recordsContainer">
                    {this.state.records.map(record=>(
                        <div className="portfolioInfo__recordContainer" >
                            <div className="portfolioInfo__recordTitle">
                                {record.dateRange[0].slice(0,10)}{" ~ "}{record.dateRange[1].slice(0,10)}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{record.institution}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.recordMajor(record.major)}<br/>
                            </div>
                            <div className="portfolioInfo__recordDesc">
                                {record.study_desc}
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }
}