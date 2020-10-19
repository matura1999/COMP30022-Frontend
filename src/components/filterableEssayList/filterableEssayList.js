import React from "react";
import EssayItem from "./essayItem";
import "../filterableItemList/FilterableItemList.css";

class EssayList extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const sortMethod = this.props.sortMethod;
        const rows = [];

        const listAfterSearch = this.props.posts.filter(({ name }) =>
            name.toLowerCase().includes(filterText.toLowerCase())
        );

        if (sortMethod === "byName") {
            listAfterSearch.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortMethod === "byDate") {
            listAfterSearch.sort((a, b) => a.date.localeCompare(b.date));
        }

        listAfterSearch.forEach(({ name, thumbnail, content, date }) => {
            rows.push(<EssayItem name={name} thumbnail={<img width="150px" height="100px" src={thumbnail} alt="THUMBNAIL"/>} content={content} date={date} />);
        });

        return <div className="postList">{rows}</div>;
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

class FilterableEssayList extends React.Component {
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
                <EssayList
                    posts={this.props.posts}
                    filterText={this.state.filterText}
                    sortMethod={this.state.sortMethod}
                />
            </div>
        );
    }
}

export default FilterableEssayList;
