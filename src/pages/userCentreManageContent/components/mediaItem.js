import React from "react";
import { Popconfirm, Popover, Card, Image, Tooltip, Input, Modal } from "antd";
import {
  EditOutlined,
  ZoomInOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import EditDescriptionModal from "./editDescriptionModal";

const { Meta } = Card;
const handleItem = (e) => {
  console.log("clicked delete");
};

const MediaItem = ({ source, alt, time, description }) => (
  <Card
    className="manageMedia__card"
    style={{ width: 200 }}
    cover={<Image className="manageMedia__image" alt={alt} src={source} />}
    actions={[
      <EditDescriptionModal description={description} />,

      <Popconfirm
        title="Are you sure？"
        // key={index}
        onConfirm={handleItem}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined />
      </Popconfirm>,
    ]}
  >
    <Meta
      className={"manageMedia__meta"}
      id={alt}
      title={time}
      description={description}
    />
  </Card>
);

export default MediaItem;
