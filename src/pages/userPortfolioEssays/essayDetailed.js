import React, { Component } from "react";
import { Spin } from 'antd';
import "./essayDetailed.css";

export default class EssayDetailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      username: this.props.username,
      id: this.props.id,
      title: '',
      content: '',
      date: '',
      thumbnail: '',
    }
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
        id: this.state.id
      })
    };
    await fetch(
      "https://mojito-portfolio-backend.herokuapp.com/files/essay",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
          this.setState({
            loading: false,
          });
        } else {
          console.log(res.data)
          const essay = res.data.essay
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
          })
        }
      })
  }
  render() {
    const { title, content, date, thumbnail, loading } = this.state
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
        <img className="essay_details_picture" src={`https://mojito-eportfolio.s3-ap-southeast-2.amazonaws.com/${thumbnail}`} alt="THUMBNAIL" />
      );
    } else {
      Thumbnail = <span className="essay_details_picture"><span className="essay_details_no_thumbnail">No Thumbnail</span></span>
    }
    return (
      <div className="essay_details">
        <div className="essay_details_thumbnail">
          {
            Thumbnail
          }
        </div>
        <div className="essay_details_title">{title}</div>
        <div className="essay_details_content">{content}</div>
        <div className="essay_details_date">{date}</div>
      </div>
    );
  }
}
