import React, { Component } from "react";
import SearchResultNameCard from "./searchResultNameCard"
import { Empty, Spin } from 'antd';
import "./searchResult.scss";
const queryString = require('query-string');

export default class SearchResult extends Component {

    constructor(props) {
        super(props);
        const parsed = queryString.parse(props.location.search);
        this.state = {
          query: parsed,
          result: [],
            loading: true,
        };
    }
     
    componentDidMount = () =>{
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(this.state.query)
        };
        fetch('https://mojito-portfolio-backend.herokuapp.com/user/info/search', requestOptions)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.success === false) {
                    setTimeout(() => {
                        this.setState({
                            notice: res.error,
                            loading: false,
                        });
                    }, 300);
                } else {
                    this.setState({
                        result: res.data,
                        loading: false,
                    });
                }
            })
    }
    
    render() {
        const {result} = this.state;
        const {loading} = this.state;
        console.log(result);

        if (loading) {
            return (
                <div className="loadingOrEmptyContainer">
                    <Spin className="spin" size="large" tip="Loading..."/>
                </div>
            )
        } else if (this.state.result.length < 1) {
            return(
                <div className="loadingOrEmptyContainer">
                    <Empty description={"No Result Found"}/>
                </div>
            )
        }else{
            return(
                <div className="searchResult__list">
                    {this.state.result.map(resultItem=>(
                        <div className="searchResult__container" >
                            <SearchResultNameCard
                                name={resultItem.name}
                                username={resultItem.username}
                                intro={resultItem.self_intro}
                            />
                        </div>
                    ))}
                </div>
            )
        }
    }
}