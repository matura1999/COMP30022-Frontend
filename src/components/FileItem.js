// this is the file item component for the file management page
import React from "react";
import "../styles/UserCentre/component/FileItem.css";

const FileItem = ({ name, type, size, date }) => (
  <div className="container">
    <div className="item">
      <div className="iconAndInfo">
        <div className="typeIconContainer">
          <div className="typeIcon">{type}</div>
        </div>

        <div className="info">
          <div className="title">{name}</div>

          <div className="typeSizeContainer">
            <div className="type">{type} File</div>
            <div className="size">{size}</div>
          </div>

          <div className="date">{date}</div>
        </div>
      </div>

      <div className="options">
        <button className="download">Download</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  </div>
);

export default FileItem;
