// this is the file item component for the file management page
import React from "react";
import "./essayItem.scss";

const EssayItem = ({ name, thumbnail, content, date }) => (
  <div className="essayItem__container">
    <div className="essayItem__item">
      <div className="essayItem__iconAndInfo">
        <div className="essayItem__thumbnail" data-testid="essayItem-thumbnail">
          {thumbnail}
        </div>

        <div className="essayItem__info">
          <div className="essayItem__title" data-testid="essayItem-name">
            {name}
          </div>
          <div className="essayItem__content" data-testid="essayItem-content">
            {content}
          </div>
          <div className="essayItem__date" data-testid="essayItem-date">
            {date}
          </div>
        </div>
      </div>

      <div className="essayItem__options">
        <button className="essayItem__edit">Edit</button>
        <button className="essayItem__delete">Delete</button>
      </div>
    </div>
  </div>
);

export default EssayItem;
