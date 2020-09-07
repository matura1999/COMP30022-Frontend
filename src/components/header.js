import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Avatar} from 'antd'
import "../styles/header.css";
import HeaderLeft from "./header-left"

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: false,
        }
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
                <HeaderLeft/>
            </div>
            
        )
    }
}