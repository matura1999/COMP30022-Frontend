// this is the file item component for the file management page
import React from "react";
import "../styles/UserCentre/component/FileItem.css";

const FileItem = ({ name, type, size, date }) => (
  <div className="container">
    <div className="item row">
      <div className="typeIconContainer col-2">
        <div className="typeIcon d-flex justify-content-center align-items-center">
          {type}
        </div>
      </div>

      <div className="info col-7 d-flex flex-column">
        <div className="title">{name}</div>

        <div className="typeSizeContainer d-flex justify-content-between">
          <div className="type">{type} File</div>
          <div className="size">{size}</div>
        </div>

        <div className="date">{date}</div>
      </div>
      <div className="options col-3 d-flex flex-column justify-content-center align-items-end">
        <button className="download">Download</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  </div>
);

export default FileItem;
