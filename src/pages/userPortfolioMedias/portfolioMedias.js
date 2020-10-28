import React, { Component } from "react";
import {Spin} from "antd";
import FilterableMediaList from "../userCentreManageContent/components/filterableMediaList";

export default class portfolioMedias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notice: "",
      mediaItemList: [],
      user: this.props.user,
      loading: true,
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
        user: this.state.user,
      }),
    };
    await fetch(
      "https://mojito-portfolio-backend.herokuapp.com/files/media",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
            this.setState({
              notice: res.error,
              loading: false,
            });
        } else {
          this.setState({
            notice: res.message,
            loading: false,
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

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText,
    });
  };

  render() {
    const {loading} = this.state;
    if (loading) {
      return (
          <div className="loadingSpin">
            <Spin
                size="large"
                tip="Loading..."
            />
          </div>
      );
    }else {
      return (
          <FilterableMediaList medias={this.state.mediaItemList} useFor="present"/>
      );
    }
  }
}
