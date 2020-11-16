import React, { Component } from "react";
import "./essayDetailed.scss";
import { Link } from "react-router-dom";
import { Image, Button, Spin } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import url from '../../assets/constant/constant'

export default class EssayDetailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      username: this.props.username,
      id: this.props.id,
      title: "",
      content: "",
      date: "",
      thumbnail: "",
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
        username: this.state.username,
        id: this.state.id,
      }),
    };
    await fetch(
      url.backendUrl + "/files/essay",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
          this.setState({
            loading: false,
          });
        } else {
          console.log(res.data);
          const essay = res.data.essay;
          const { title, content, date } = essay;
          const dateObj = new Date(date);
          const createdDate = dateObj.toLocaleString();
          var imageUrl = null;
          if (res.data.image != null) {
            var { Key: imageUrl } = res.data.image;
          }
          this.setState({
            date: createdDate,
            title: title,
            content: content,
            thumbnail: imageUrl,
            loading: false,
          });
        }
      });
  };
  render() {
    const { title, content, date, thumbnail, loading, username } = this.state;
    var Thumbnail;
    if (loading) {
      return (
        <div className="loadingOrEmptyContainer">
          <Spin className="spin" size="large" tip="Loading..." />
        </div>
      );
    }
    if (thumbnail) {
      Thumbnail = (
        <Image
          className="essayDetailed__picture"
          src={`${url.awsUrl}/${thumbnail}`}
          alt="THUMBNAIL"
        />
      );
    }
    return (
      <div className="essayDetailed__container">
        <div className="essayDetailed__back">
          <Link
            to={{ pathname: "/userPortfolio/" + username + "/essays" }}
            username={username}
          >
            <Button type="default" size="large" className="essayDetailed__back">
              <LeftOutlined />
              Return to All Essays
            </Button>
          </Link>
        </div>
        <div className="essayDetailed__title">{title}</div>

        <div className="essayDetailed__date">{date}</div>
        <div className="essayDetailed__content">{content}</div>
        <div className="essayDetailed__thumbnail">{Thumbnail}</div>
      </div>
    );
  }
}
