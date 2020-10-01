import React from "react";
import "../styles/UserCentre/component/ListOfItem.scss";

const ListOfPosts = ({ name, thumbnail, abstract, date }) => (
    <div className="container">
        <div className="p-item">
            <div className="iconAndInfo">
                <div className="typeIconContainer">
                    <div className="thumbnail">{thumbnail}</div>
                </div>

                <div className="info">
                    <div className="title">{name}</div>
                    <div className="p-abstract">{abstract}</div>
                    <div className="date">{date}</div>
                </div>
            </div>
        </div>
    </div>
);

export default ListOfPosts;
