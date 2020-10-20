import React from "react";
import { Popconfirm, Popover, Card, Image, Tooltip, Input, Modal } from "antd";
import {
  EditOutlined,
  ZoomInOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import EditDescriptionModal from "./editDescriptionModal";
import "../manageMedias.scss";

const { Meta } = Card;
// const handleItem = (e) => {
//   e.preventDefault();
//   deleteElement();
// };

const deleteElement = async (source, descriptionUrl) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ key: source }),
  };
  console.log(source);
  await fetch(
    "https://mojito-portfolio-backend.herokuapp.com/files",
    requestOptions
  );

  console.log(descriptionUrl);
  requestOptions.body = JSON.stringify({ key: descriptionUrl });
  await fetch(
    "https://mojito-portfolio-backend.herokuapp.com/files",
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
        src={`https://mojito-eportfolio.s3-ap-southeast-2.amazonaws.com/${source}`}
      />
    }
    actions={[
      <EditDescriptionModal description={description} />,

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
