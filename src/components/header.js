import React, { Component } from "react";
import { NavLink} from "react-router-dom";

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: false,
            redirect: null
        }
    }

    setRedirect = (link) => {
        this.setState({ redirect: link });
    }
    
    render(){
        return (
            <div class="navbar">
                <NavLink exact to="/" class="logo-link">
                        <button class="logo" to="/yes">🍋 Mojito</button>
                </NavLink>
                
                <form class="search-bar" action="#">
                    <input type="text" placeholder="Search Portfolio" name="search-protfolio"/>
                    <button class="search-button" type="submit"><i class="fa fa-search"/></button>
                </form>
                <div class="sign-button-container">
                        <NavLink exact to="/signin" class="sign-in">
                            <button class="sign-in-button">Sign in</button>
                        </NavLink>
                        <NavLink exact to="/signup" class="sign-up">
                            <button class="sign-up-button">Sign up</button>
                        </NavLink>
                </div>

                
            </div>
            
        )
    }
}