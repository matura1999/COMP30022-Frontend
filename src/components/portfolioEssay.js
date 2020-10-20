import React, { Component } from "react";
import {Descriptions} from "antd";

export default class PortfolioEssay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            content: '',
            thumbnail: '',
        }
    }

    // componentDidMount = async () => {
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //         },
    //     };
    //     await fetch('https://mojito-portfolio-backend.herokuapp.com/' + sessionStorage.getItem('username'), requestOptions)
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.success === false) {
    //                 setTimeout(() => {
    //
    //                 }, 300);
    //             } else {
    //                 // return data, include all basic user information
    //                 const data = res.data;
    //                 this.setState({ name: data.name, date: data.toDateString(), content: data.content, thumbnail: data.thumbnail })
    //             }
    //         })
    // }



    // render(){
    //     return(
    //
    //     )
    // }

}