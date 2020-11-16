import React from "react";
import "./myPortfolioFileItem.scss";
import url from '../../assets/constant/constant'

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
          href={`${url.awsUrl}/${fileUrl}`}
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
