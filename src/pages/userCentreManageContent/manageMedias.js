import React, { Component } from "react";
import FilterableMediaList from "./components/filterableMediaList";
import "./manageMedias.scss";
export default class manageMedias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notice: "",
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
              // const name = fileUrl.split("/").pop();
              // const type = name.split(".").pop().toUpperCase();
              // const kbSize = Math.round(size / 1024);
              // let fileSize = "";
              // if (kbSize <= 1024) {
              //   fileSize = `${kbSize}KB`;
              // } else {
              //   const mbSize = Math.round(kbSize / 1024);
              //   fileSize = `${mbSize}MB`;
              // }
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

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText,
    });
  };
  render() {
    return <FilterableMediaList medias={this.state.mediaItemList} />;
  }
}
