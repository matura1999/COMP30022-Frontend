import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../userPortfolio/userPortfolio.css";
import UserAvatar from "../../components/userAvatar/userAvatar";
import "./searchResult.scss";

const visitPortfolio = (username) =>{
    window.location.href = "/userPortfolio/" + username + "/info";
}

const SearchResultNameCard = ({ name, username, intro }) => (
    <div className="searchResult__item" onclick={()=>visitPortfolio(username)}>
        <div className="searchResult__avatarAndInfo">
            <div className="searchResult__avatarContainer">
                <div className="searchResult__avatar"><UserAvatar size={80}/></div>
            </div>
            <div className="searchResult__infoContainer">
                <div className="searchResult__name" data-testid="searchResult-name">{name}'s Portfolio</div>
                <div className="searchResult__intro" data-testid="searchResult-intro">{intro}</div>
            </div>
        </div>
    </div>
);

export default SearchResultNameCard;
