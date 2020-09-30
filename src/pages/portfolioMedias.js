import React, { Component } from "react"
import "../styles/UserCentre/component/FilterableItemList.css";
import {  Popover, Button, Card } from 'antd';
import { EditOutlined,  ZoomInOutlined, DeleteOutlined} from '@ant-design/icons';

const { Meta } = Card;



const mediaItemList = [
    {
        name: "title",
        source: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        alt: "aa",
        time: "2020-09-01 01:02:00",
        description: "This is the description"
    },
    {
        name: "title",
        source: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        alt: "aa",
        time: "2020-09-01 01:01:00",
        description: "This is the description"
    },
    {
        name: "title",
        source: "https://www.w3schools.com/images/w3schools_green.jpg",
        alt: "aa",
        time: "2020-09-01 01:01:00",
        description: "This is the description"
    },
    {
        name: "title",
        source: "https://www.w3schools.com/images/w3schools_green.jpg",
        alt: "aa",
        time: "2020-09-01 01:01:00",
        description: "This is the description"
    },
    {
        name: "title",
        source: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        alt: "aa",
        time: "2020-09-01 01:01:00",
        description: "This is the description"
    },

];




class List extends React.Component {

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

        listAfterSearch.forEach(({ name, source, alt, time, description}) => {
            rows.push(
                <div >
                    <Card
                        style={{ width: 200}}
                        cover={
                            <img width="150px" height="150px" alt={alt} src={source}/>
                        }
                        actions={[
                            <ZoomInOutlined />,
                            <EditOutlined key="edit" />,
                            <DeleteOutlined key="delete" />,
                        ]}
                    >
                        <Meta
                            title={time}
                            description={description}
                        />
                    </Card>
                    {/*<div> {time} </div>*/}
                    <br/>
                </div>);
        });

        return <div className="item">{rows}</div>;
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