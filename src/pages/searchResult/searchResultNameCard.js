import React from "react";
import UserAvatar from "../../components/userAvatar/userAvatar";
import "./searchResult.scss";

const SearchResultNameCard = ({ name, username, intro }) => (
    <a className="searchResult__item" href = {"/userPortfolio/" + username + "/info"}>
        <div className="searchResult__avatarAndInfo">
            <div className="searchResult__avatarContainer">
                <div className="searchResult__avatar"><UserAvatar size={80} username={username}/></div>
            </div>
            <div className="searchResult__infoContainer">
                <div className="searchResult__name" data-testid="searchResult-name">{name}'s Portfolio</div>
                <div className="searchResult__intro" data-testid="searchResult-intro">{intro}</div>
            </div>
        </div>
    </a>
);

export default SearchResultNameCard;
