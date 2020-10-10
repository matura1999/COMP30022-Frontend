import React from "react";
import "../styles/UserCentre/component/ListOfItem.css";

const ListOfPosts = ({ name, thumbnail, abstract, date }) => (
    <div className="essays__container">
        <div className="essays__item">
            <div className="essays__iconAndInfo">
                <div className="essays__typeIconContainer">
                    <div className="essays__thumbnail">{thumbnail}</div>
                </div>

                <div className="essays__info">
                    <div className="essays__title">{name}</div>
                    <div className="essays__abstract">{abstract}</div>
                    <div className="essays__date">{date}</div>
                </div>
            </div>
        </div>
    </div>
);

export default ListOfPosts;
