import React from "react";
import { Popconfirm, Card, Image } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import EditDescriptionModal from "./editDescriptionModal";
import "../manageMedias.scss";
import url from '../../../assets/constant/constant'

const { Meta } = Card;

const deleteElement = async (source, descriptionUrl) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ key: source }),
  };
  await fetch(
    url.backendUrl + "/files",
    requestOptions
  );

  requestOptions.body = JSON.stringify({ key: descriptionUrl });
  await fetch(
    url.backendUrl + "/files",
    requestOptions
  );

  window.location.reload(false);
};

const MediaItem = ({ source, time, description, descriptionUrl }) => (
  <Card
    className="manageMedia__card"
    style={{ width: 200 }}
    cover={
      <Image
        className="manageMedia__image"
        src={`${url.awsUrl}/${source}`}
      />
    }
    actions={[
      <EditDescriptionModal description={description} source={source}/>,

      <Popconfirm
        title="Are you sure？"
        onConfirm={(event) => {
          event.preventDefault();
          deleteElement(source, descriptionUrl);
        }}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined />
      </Popconfirm>,
    ]}
  >
    <Meta
      className={"manageMedia__meta"}
      title={time}
      description={description}
    />
  </Card>
);

export default MediaItem;
