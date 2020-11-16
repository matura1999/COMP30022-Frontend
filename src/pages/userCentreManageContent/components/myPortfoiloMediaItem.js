import React from "react";
import { Card, Image } from "antd";
import url from '../../../assets/constant/constant'
import "../manageMedias.scss";

const MyPortfolioMediaItem = ({ source, time, description }) => (
  <Card
    className="myPortfolioMedia__card"
    style={{ width: 200 }}
    cover={
      <Image
        className="myPortfolioMedia__image"
        src={`${url.awsUrl}/${source}`}
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
