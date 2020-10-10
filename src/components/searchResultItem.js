import React from "react";
import "../styles/UserCentre/component/PostItem.scss";

const SearchResultItem = ({ avatar, name, introduction}) => (
    <div className="e-container">
        <div className="e-item">
            <div className="e-iconAndInfo">
                <div className="e-typeIconContainer">
                    <div className="e-thumbnail">{thumbnail}</div>
                </div>

                <div className="e-info">
                    <div className="e-title">{name}</div>
                    <div className="e-abstract">{abstract}</div>
                    <div className="e-date">{date}</div>
                </div>
            </div>

            <div className="e-options">
                <button className="e-edit">Edit</button>
                <button className="e-delete">Delete</button>
            </div>
        </div>
    </div>
);

export default PostItem;
