import React from "react";
import "./myPortfolioFileItem.scss";

const MyPortfolioFileItem = ({ name, type, size, date, fileUrl }) => (
  <div className="portfolioFile__item">
    <div className="portfolioFile__typeIconContainer">
      <div className="portfolioFile__typeIcon">{type}</div>
    </div>

    <div className="portfolioFile__info">
      <div className="portfolioFile__title">{name}</div>

      <div className="portfolioFile__typeSizeContainer">
        <div className="portfolioFile__type">{type} File</div>
        <div className="portfolioFile__size">{size}</div>
      </div>

      <div className="portfolioFile__dateDownloadContainer">
        <div className="portfolioFile__date">{date}</div>
        <a
          href={`https://mojito-eportfolio.s3-ap-southeast-2.amazonaws.com/${fileUrl}`}
          download
        >
          <button className="portfolioFile__download">
            <i className="fa fa-download" />
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default MyPortfolioFileItem;
