import React, { Component } from "react";
import "../manageMedias.scss";
import { Popconfirm, Popover, Card, Image, Tooltip, Input, Modal } from "antd";
import {
  EditOutlined,
  ZoomInOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import EditDescriptionModal from "./editDescriptionModal";
import MediaItem from "./mediaItem";

class MediaList extends React.Component {
  render() {
    // console.log(this.props.medias);
    const filterText = this.props.filterText;
    const rows = [];

    const listAfterSearch = this.props.medias.filter(({ description }) =>
      description.toLowerCase().includes(filterText.toLowerCase())
    );

    listAfterSearch.sort((a, b) => b.time.localeCompare(a.time));

    listAfterSearch.forEach(
      ({ source, time, description, descriptionUrl }, index) => {
        rows.push(
          <MediaItem
            source={source}
            time={time}
            description={description}
            descriptionUrl={descriptionUrl}
          />
        );
      }
    );

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

class FilterableMediaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          medias={this.props.medias}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default FilterableMediaList;
