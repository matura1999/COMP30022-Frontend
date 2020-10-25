import React, { Component } from "react";
import {Spin} from "antd";
import SearchResultNameCard from "./searchResultNameCard"
import "./searchResult.scss";
const queryString = require('query-string');

export default class SearchResult extends Component {

    constructor(props) {
        super(props);
        const parsed = queryString.parse(props.location.search);
        this.state = {
          query: parsed,
          result: [],
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
                        
                    }, 300);
                } else {
                    this.setState({result: res.data});
                }
            })
    }
    
    render() {
        const {result} = this.state;
        console.log(result);

        if(this.state.result.length < 1){
            return(
                <div className="loadingSpin">
                    <Spin
                        size="large"
                        tip="Loading..."
                    />
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