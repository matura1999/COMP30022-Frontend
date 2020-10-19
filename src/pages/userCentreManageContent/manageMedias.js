import React, { Component } from "react";
import "./manageMedias.scss";
import { Popconfirm, Popover, Card, Image, Tooltip, Input, Modal } from "antd";
import {
  EditOutlined,
  ZoomInOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import EditDescriptionModal from "./components/editDescriptionModal";
import MediaItem from "./components/mediaItem";

const mediaItemList = [
  {
    source:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    alt: "aa",
    time: "2020-09-01 01:01:00",
    description: "This is the description  jsndkjandkajsndajks",
  },
  {
    source:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    alt: "a",
    time: "2020-10-20 01:01:02",
    description:
      "This is the description ffffffffffffffffffffffffffffffffffffffffffffffffff",
  },
  {
    source: "https://www.w3schools.com/images/w3schools_green.jpg",
    alt: "b",
    time: "2020-09-01 01:02:00",
    description: "hahahhahha",
  },
  {
    source: "https://www.w3schools.com/images/w3schools_green.jpg",
    alt: "c",
    time: "2020-09-01 01:01:00",
    description: "This is the description",
  },
  {
    source:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    alt: "d",
    time: "2020-09-01 01:01:00",
    description: "This is the description",
  },
  {
    source:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    alt: "e",
    time: "2020-10-20 01:01:00",
    description: "This is the description",
  },
];

class MediaList extends React.Component {
  state = {
    files: this.props.files,
  };

  render() {
    const filterText = this.props.filterText;
    const rows = [];

    const listAfterSearch = this.props.files.filter(({ description }) =>
      description.toLowerCase().includes(filterText.toLowerCase())
    );

    listAfterSearch.sort((a, b) => b.time.localeCompare(a.time));

    listAfterSearch.forEach(({ source, alt, time, description }, index) => {
      rows.push(
        <MediaItem
          source={source}
          alt={alt}
          time={time}
          description={description}
        />
      );
    });

    return <div className="manageMedia__content">{rows}</div>;
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  render() {
    return (
      <form className="searchAndSortBar">
        <input
          className="manageMedia__searchBar"
          type="text"
          placeholder="Search Media"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </form>
    );
  }
}

export default class manageMedias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: mediaItemList,
      filterText: "",
    };
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <MediaList
          files={this.state.files}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
