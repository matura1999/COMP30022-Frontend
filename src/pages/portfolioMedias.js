import React, { Component } from "react";
import "../styles/UserCentre/component/FilterableItemList.css";
import "../styles/MyPortfolio/portfolioMedias.scss";
import {Card, Image, Popover} from "antd";

const { Meta } = Card;

const mediaItemList = [
  {
    name: "title",
    source:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    alt: "a",
    time: "2020-09-01 01:02:00",
    description: "This is the description nnnnnnnnnnn",
  },
  {
    name: "title",
    source:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    alt: "aa",
    time: "2020-09-01 01:01:00",
    description: "This is the description",
  },
  {
    name: "title",
    source:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    alt: "b",
    time: "2020-09-01 01:01:00",
    description: "This is the description",
  },
  {
    name: "title",
    source:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    alt: "c",
    time: "2020-09-01 01:01:00",
    description: "This is the description",
  },
  {
    name: "title",
    source:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    alt: "d",
    time: "2020-09-01 01:01:00",
    description: "This is the description",
  },
  {
    name: "title",
    source:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    alt: "e",
    time: "2020-09-01 01:01:00",
    description: "This is the description",
  },
  {
    name: "title",
    source:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    alt: "f",
    time: "2020-09-01 01:01:00",
    description: "This is the description",
  },
];

class List extends React.Component {
  state = {
    clicked: false,
    hovered: false,
    show: 0,
  }

  handleHoverChange = (visible,source) => {
    if (visible) {
      this.setState({
        hovered: visible,
        clicked: false,
        show: source
      });
    } else {
      this.setState({
        hovered: visible,
        clicked: false,
        show:0
      });
    }
  };

  handleClickChange = (visible,source) => {
    if (visible) {
      this.setState({
        hovered: false,
        clicked: visible,
        show: source
      });
    } else {
      this.setState({
        hovered: false,
        clicked: visible,
        show:0
      });
    }
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  };

  render() {
    const filterText = this.props.filterText;
    const sortMethod = this.props.sortMethod;
    const rows = [];

    const listAfterSearch = this.props.files.filter(({ description }) =>
      description.toLowerCase().includes(filterText.toLowerCase())
    );

    if (sortMethod === "byDate") {
      listAfterSearch.sort((a, b) => a.time.localeCompare(b.time));
    }

    listAfterSearch.forEach(({ source, alt, time, description }) => {
      rows.push(
        // <div classname = "di">
        <Card
          className="media__card"
          style={{ width: 200 }}
          cover={<Image className="media__image" alt={alt} src={source} />}
        >
          <Popover
              className={"manageMedia__popover"}
              style={{ width: 50 }}
              content={
                <div>
                  {time}
                  <br/>
                  {description}
                </div>}
              trigger="hover"
              autoAdjustOverflow
              color={"lime"}
              visible={this.state.show === alt && this.state.hovered}
              onVisibleChange={(e)=>this.handleHoverChange(e, alt)}
          >
            <Popover
                className={"manageMedia__popover"}
                content={
                  <div>
                    {time}
                    <br/>
                    {description}
                    <br/>
                    <a onClick={this.hide}>Close</a>
                  </div>
                }
                trigger="click"
                visible={this.state.show === alt && this.state.clicked}
                onVisibleChange={(e)=>this.handleClickChange(e, alt)}
            >
              <Meta
                  className={"media__meta"}
                  title={time}
                  description={description}
              />
            </Popover>
          </Popover>
          {/*<Meta className={"media__meta"} title={time} description={description} />*/}
        </Card>
      );
    });

    return <div className="media__content">{rows}</div>;
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

export default class portfolioFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <List
          files={mediaItemList}
          filterText={this.state.filterText}
          sortMethod={this.state.sortMethod}
        />
      </div>
    );
  }
}
