// this is the file item component for the file management page
import React from "react";
import "../styles/UserCentre/component/PostItem.css";

const PostItem = ({ name, thumbnail, abstract, date }) => (
    <div className="container">
        <div className="item">
            <div className="iconAndInfo">
                <div className="typeIconContainer">
                    <div className="thumbnail">{thumbnail}</div>
                </div>

                <div className="info">
                    <div className="title">{name}</div>
                    <div className="abstract">{abstract}</div>
                    <div className="date">{date}</div>
                </div>
            </div>

            <div className="options">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </div>
    </div>
);

export default PostItem;
