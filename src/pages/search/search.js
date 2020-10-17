import React, { Component } from "react";
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
        
        return (
            <div className="search-result">
                This is search result page, the result is in console
            </div>
        );
    }
}