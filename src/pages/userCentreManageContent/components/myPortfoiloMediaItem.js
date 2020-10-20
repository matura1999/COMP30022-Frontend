import React from "react";
import { Card, Image } from "antd";

import "../manageMedias.scss";

const MyPortfolioMediaItem = ({ source, time, description }) => (
  <Card
    className="myPortfolioMedia__card"
    style={{ width: 200 }}
    cover={
      <Image
        className="myPortfolioMedia__image"
        src={`https://mojito-eportfolio.s3-ap-southeast-2.amazonaws.com/${source}`}
      />
    }
  >
    <Card.Meta
      className={"myPortfolioMedia__meta"}
      title={time}
      description={description}
    />
  </Card>
);

export default MyPortfolioMediaItem;
