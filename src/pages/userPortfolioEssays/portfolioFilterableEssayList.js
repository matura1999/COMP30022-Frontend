import React from "react";
import PortfolioEssayItem from "./portfolioEssayItem";
import "../../components/filterableItemList/searchAndSortBar.scss";

class PortfolioEssayList extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const sortMethod = this.props.sortMethod;
    const username = this.props.username;
    const rows = [];

    const listAfterSearch = this.props.essays.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (sortMethod === "byName") {
      listAfterSearch.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortMethod === "byDate") {
      listAfterSearch.sort((a, b) => b.date.localeCompare(a.date));
    }
    console.log(listAfterSearch);
    listAfterSearch.forEach(({ id, name, thumbnail, content, date }) => {
      if (thumbnail) {
        rows.push(
          <PortfolioEssayItem
            id={id}
            name={name}
            thumbnail={
              <img
                // width="150px"
                // height="100px"
                src={`https://mojito-eportfolio.s3-ap-southeast-2.amazonaws.com/${thumbnail}`}
                alt="THUMBNAIL"
              />
            }
            content={content}
            date={date}
            username={username}
          />
        );
      } else {
        rows.push(
          <PortfolioEssayItem
            id={id}
            name={name}
            thumbnail={"No Thumbnail"}
            content={content}
            date={date}
            username={username}
          />
        );
      }
    });

    return <div className="myPortfolioEssayList">{rows}</div>;
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
          placeholder="Search Essay"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />

        <select className="sortBar" onChange={this.handleSortChange}>
          <option value="byDefault">Sort By Default</option>
          <option value="byName">Sort By Name</option>
          <option value="byDate">Sort By Date</option>
        </select>
      </form>
    );
  }
}

class PortfolioFilterableEssayList extends React.Component {
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
        <PortfolioEssayList
          essays={this.props.essays}
          username={this.props.username}
          filterText={this.state.filterText}
          sortMethod={this.state.sortMethod}
        />
      </div>
    );
  }
}

export default PortfolioFilterableEssayList;
