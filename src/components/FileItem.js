// this is the file item component for the file management page
import React from "react";
import "../styles/UserCentre/component/FileItem.scss";

const deleteElement = async (fileUrl) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ key: fileUrl }),
  };
  await fetch(
    "https://mojito-portfolio-backend.herokuapp.com/files",
    requestOptions
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.success === false) {
        setTimeout(() => {
          this.setState({
            notice: res.error,
          });
        }, 300);
      } else {
        window.location.reload(false);
      }
    });
};

const FileItem = ({ name, type, size, date, fileUrl }) => (
  <div className="fileItem__container">
    <div className="fileItem__item">
      <div className="fileItem__iconAndInfo">
        <div className="fileItem__typeIconContainer">
          <div className="fileItem__typeIcon">{type}</div>
        </div>

        <div className="fileItem__info">
          <div className="fileItem__title">{name}</div>

          <div className="fileItem__typeSizeContainer">
            <div className="fileItem__type">{type} File</div>
            <div className="fileItem__size">{size}</div>
          </div>

          <div className="fileItem__date">{date}</div>
        </div>
      </div>

      <div className="fileItem__options">
        <a
          href={`https://mojito-eportfolio.s3-ap-southeast-2.amazonaws.com/${fileUrl}`}
          download
        >
          <button className="fileItem__download">Download</button>
        </a>

        <button
          className="fileItem__delete"
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
