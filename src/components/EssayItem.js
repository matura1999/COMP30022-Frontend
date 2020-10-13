// this is the file item component for the file management page
import React from "react";
import "../styles/UserCentre/component/EssayItem.css";

const EssayItem = ({ name, thumbnail, content, date }) => (
    <div className="e-container">
        <div className="e-item">
            <div className="e-iconAndInfo">
                <div className="e-typeIconContainer">
                    <div className="e-thumbnail">{thumbnail}</div>
                </div>

                <div className="e-info">
                    <div className="e-title">{name}</div>
                    <div className="e-content">{content}</div>
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

export default EssayItem;
