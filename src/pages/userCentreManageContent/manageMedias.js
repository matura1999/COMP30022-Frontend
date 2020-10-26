import React, { Component } from "react";
import { Spin } from "antd";
import FilterableMediaList from "./components/filterableMediaList";

export default class manageMedias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaItemList: [],
    };
  }

  componentDidMount = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: sessionStorage.getItem("username"),
      }),
    };
    await fetch(
      "https://mojito-portfolio-backend.herokuapp.com/files/media",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
          setTimeout(() => {
            this.setState({
              notice: res.error,
            });
          }, 300);
        } else {
          this.setState({
            notice: res.message,
          });
          console.log(res.data);
          const temMediaList = [];
          res.data.map(
            ({
              url: mediaUrl,
              LastModified: date,
              description,
              descriptionUrl,
            }) => {
              let dateObj = new Date(date);
              const createdDate = dateObj.toLocaleString();
              const mediaObject = {
                time: createdDate,
                description: description,
                source: mediaUrl,
                descriptionUrl: descriptionUrl,
              };

              temMediaList.push(mediaObject);
            }
          );
          console.log(temMediaList);
          this.setState({
            mediaItemList: temMediaList,
          });
        }
      });
  };

  render() {
    if (this.state.mediaItemList.length < 1) {
      return (
        <div className="loadingSpin">
          <Spin size="large" tip="Loading..." />
        </div>
      );
    } else {
      return (
        <FilterableMediaList
          medias={this.state.mediaItemList}
          useFor="manage"
        />
      );
    }
  }
}
