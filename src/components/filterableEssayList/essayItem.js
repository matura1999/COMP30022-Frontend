// this is the file item component for the file management page
import React from "react";
import "./essayItem.css";

const EssayItem = ({ name, thumbnail, content, date }) => (
    <div className="e-container">
        <div className="e-item">
            <div className="e-iconAndInfo">
                <div className="e-typeIconContainer">
                    <div className="e-thumbnail" data-testid="essayItem-thumbnail">{thumbnail}</div>
                </div>

                <div className="e-info">
                    <div className="e-title" data-testid="essayItem-name">{name}</div>
                    <div className="e-content" data-testid="essayItem-content">{content}</div>
                    <div className="e-date" data-testid="essayItem-date">{date}</div>
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
