import React, { Component } from "react";

const userList = [
    {
        name: "big bob",
        self_intro: "Hi I'm bob",
        avatar: "https://static.billboard.com/files/media/ateez-1-2020-kq-entertainment-1024x677.jpg",
    },
    {
        name: "big john",
        self_intro: "Hi I'm john",
        avatar: "https://static.billboard.com/files/media/ateez-1-2020-kq-entertainment-1024x677.jpg",
    },
    {
        name: "big oscar",
        self_intro: "Hi I'm oscar",
        avatar: "https://static.billboard.com/files/media/ateez-1-2020-kq-entertainment-1024x677.jpg",
    },
];

export default class SearchResult extends Component {
    render() {
        return (
            <div className="search-result">
                <SearchResultList results={searchResultList} />
            </div>
        );
    }
}