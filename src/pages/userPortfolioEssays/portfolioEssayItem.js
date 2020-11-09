import React from "react";
import "./portfolioEssayItem.scss";
import { Link } from "react-router-dom";
const PortfolioEssayItem = ({
  username,
  id,
  name,
  thumbnail,
  content,
  date,
}) => (
  <div className="essays__item">
    <div className="essays__thumbnail">{thumbnail}</div>

    <div className="essays__info">
      <Link exact to={"/userPortfolio/" + username + "/essays#" + id}>
        <div className="essays__title">{name}</div>
        <div className="essays__content">{content}</div>
        <div className="essays__date">{date}</div>
      </Link>
    </div>
  </div>
);
export default PortfolioEssayItem;
