import React, { Component } from "react";
import "../../styles/UserCentre/component/FilterableItemList.css";
import "./manageMedias.scss";
import { Popconfirm, Popover, Card, Image, Tooltip, Input, Modal } from "antd";
import {
  EditOutlined,
  ZoomInOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const mediaItemList = [
  {
    source:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    alt: "aa",
    time: "2020-09-01 01:02:00",
    description: "This is the description",
  },
  {
    source:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    alt: "a",
    time: "2020-09-01 01:01:00",
    description:
      "This is the description ffffffffffffffffffffffffffffffffffffffffffffffffff",
  },
  {
    source: "https://www.w3schools.com/images/w3schools_green.jpg",
    alt: "b",
    time: "2020-09-01 01:01:00",
    description: "This is the description",
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
    visible: false,
    confirmLoading: false,
    clicked: false,
    hovered: false,
    show: 0,
  };
  handleItem = (index) => {
    const list = this.props.files;
    list.splice(index, 1);
    this.setState({ files: list });
    console.log("sdahk");
  };

  handleHoverChange = (visible, source) => {
    if (visible) {
      this.setState({
        hovered: visible,
        clicked: false,
        show: source,
      });
    } else {
      this.setState({
        hovered: visible,
        clicked: false,
        show: 0,
      });
    }
  };

  handleClickChange = (visible, source) => {
    if (visible) {
      this.setState({
        hovered: false,
        clicked: visible,
        show: source,
      });
    } else {
      this.setState({
        hovered: false,
        clicked: visible,
        show: 0,
      });
    }
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    // const index = e.target.getAttribute("key")
    // let data = this.state.files
    // data[1].description = document.getElementById('text').value
    this.setState({
      confirmLoading: true,
      // files :data
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };

  render() {
    const filterText = this.props.filterText;
    const sortMethod = this.props.sortMethod;
    const rows = [];
    const { TextArea } = Input;
    const { confirmLoading } = this.state;

    const listAfterSearch = this.props.files.filter(({ description }) =>
      description.toLowerCase().includes(filterText.toLowerCase())
    );

    if (sortMethod === "byDate") {
      listAfterSearch.sort((a, b) => b.time.localeCompare(a.time));
    }

    listAfterSearch.forEach(({ source, alt, time, description }, index) => {
      rows.push(
        <div>
          <Card
            className="manageMedia__card"
            style={{ width: 200 }}
            cover={
              <Image className="manageMedia__image" alt={alt} src={source} />
            }
            actions={[
              <>
                <EditOutlined onClick={this.showModal} />
                <Modal
                  title="Edit Description"
                  visible={this.state.visible}
                  key={index}
                  confirmLoading={confirmLoading}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  destroyOnClose
                >
                  <TextArea
                    id="text"
                    rows={4}
                    allowClear
                    defaultValue={description}
                  />
                </Modal>
              </>,
              <Popconfirm
                title="Are you sure？"
                key={index}
                onConfirm={this.handleItem}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined />
              </Popconfirm>,
            ]}
          >
            <Popover
              className={"manageMedia__popover"}
              style={{ width: 50 }}
              content={
                <div>
                  {time}
                  <br />
                  {description}
                </div>
              }
              trigger="hover"
              autoAdjustOverflow
              color={"lime"}
              visible={this.state.show === alt && this.state.hovered}
              onVisibleChange={(e) => this.handleHoverChange(e, alt)}
            >
              <Popover
                className={"manageMedia__popover"}
                content={
                  <div>
                    {time}
                    <br />
                    {description}
                    <br />
                    <a onClick={this.hide}>Close</a>
                  </div>
                }
                trigger="click"
                visible={this.state.show === alt && this.state.clicked}
                onVisibleChange={(e) => this.handleClickChange(e, alt)}
              >
                <Meta
                  className={"manageMedia__meta"}
                  id={alt}
                  title={time}
                  description={description}
                />
              </Popover>
            </Popover>
          </Card>
          <br />
        </div>
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

  handleSortChange = (e) => {
    this.props.onSortChange(e.target.value);
  };

  render() {
    return (
      <form className="searchAndSortBar">
        <input
          className="searchBar"
          type="text"
          placeholder="Search Media"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />

        <select className="sortBar" onChange={this.handleSortChange}>
          <option value="byDefault">Sort By Default</option>
          <option value="byDate">Sort By Date</option>
          {/* <option value="bySize">Sort By Size</option>
          <option value="byDate">Sort By Date</option> */}
        </select>
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
      sortMethod: "byDefault",
    };
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText,
    });
  };

  handleSortChange = (sortMethod) => {
    this.setState({
      sortMethod: sortMethod,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
          onSortChange={this.handleSortChange}
        />
        <MediaList
          files={this.state.files}
          filterText={this.state.filterText}
          sortMethod={this.state.sortMethod}
        />
      </div>
    );
  }
}
