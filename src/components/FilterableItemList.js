import React from "react";
import FileItem from "./FileItem";
import "../styles/UserCentre/component/FilterableItemList.css";

class FileList extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const sortMethod = this.props.sortMethod;
    const rows = [];

    const listAfterSearch = this.props.files.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (sortMethod === "byName") {
      listAfterSearch.sort((a, b) => a.name.localeCompare(b.name));
    }

    listAfterSearch.forEach(({ name, type, date, size, fileUrl }) => {
      rows.push(
        <FileItem
          name={name}
          type={type}
          date={date}
          size={size}
          fileUrl={fileUrl}
        />
      );
    });

    return <div className="fileList">{rows}</div>;
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
          placeholder="Search File"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />

        <select className="sortBar" onChange={this.handleSortChange}>
          <option value="byDefault">Sort By Default</option>
          <option value="byName">Sort By Name</option>
          {/* <option value="bySize">Sort By Size</option>
          <option value="byDate">Sort By Date</option> */}
        </select>
      </form>
    );
  }
}

class FilterableItemList extends React.Component {
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
        <FileList
          files={this.props.files}
          filterText={this.state.filterText}
          sortMethod={this.state.sortMethod}
        />
      </div>
    );
  }
}

export default FilterableItemList;
