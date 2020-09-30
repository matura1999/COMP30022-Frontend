// this is the file item component for the file management page
import React from "react";
import "../styles/UserCentre/component/FileItem.css";

const deleteElement = (fileUrl) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ key: fileUrl }),
  };
  fetch("https://mojito-portfolio-backend.herokuapp.com/files", requestOptions)
    .then((res) => res.json())
    .then((res) => {
      if (res.success === false) {
        setTimeout(() => {
          this.setState({
            notice: res.error,
          });
        }, 300);
      }
    })
    .then(window.location.reload(false));
};

const FileItem = ({ name, type, size, date, fileUrl }) => (
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
        <a
          href={`https://mojito-eportfolio.s3-ap-southeast-2.amazonaws.com/${fileUrl}`}
          download
        >
          <button className="download">Download</button>
        </a>

        <button
          className="delete"
          onClick={(event) => {
            event.preventDefault();
            deleteElement(fileUrl);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default FileItem;
