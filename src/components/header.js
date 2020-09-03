import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../styles/header.css";

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: false,
        }
    }

    setRedirect = (link) => {
        this.setState({ redirect: link });
    }
    
    render(){
        return (
            <div class="navbar">
                <Link exact to="/" class="logo-link">
                    <button class="logo">🍋 Mojito</button>
                </Link>
                
                <form class="search-bar" action="#">
                    <input type="text" placeholder="Search Portfolio" name="search-protfolio"/>
                    <button class="search-button" type="submit"><i class="fa fa-search"/></button>
                </form>
                <div class="sign-button-container">
                    <Link exact to="/signin" class="sign-in">
                        <button class="sign-in-button">Sign in</button>
                    </Link>
                    <Link exact to="/signup" class="sign-up">
                        <button class="sign-up-button">Sign up</button>
                    </Link>
                </div>
            </div>
            
        )
    }
}