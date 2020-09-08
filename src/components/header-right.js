import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Avatar, Button} from 'antd'
import "../styles/header.css";

export default class HeaderRight extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: false,
        }
    }

    onLogout = () =>{
        sessionStorage.setItem('authorised', false);
        sessionStorage.removeItem('authorised')
    }
    
    render(){
        if (!sessionStorage.getItem('authorised')){
            return (
                <div class="sign-button-container">
                    <Link exact to="/signin" class="sign-in">
                        <button class="sign-in-button">Sign in</button>
                    </Link>
                    <Link exact to="/signup" class="sign-up">
                        <button class="sign-up-button">Sign up</button>
                    </Link>
                </div>
            )
        } else {
            return (
                <div class="sign-button-container">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{marginLeft:"25%"}} size="large"/>
                    <Button type="primary" block onClick={() => this.onLogout}>Log out</Button>
                </div>
            )
        } 
    }
}