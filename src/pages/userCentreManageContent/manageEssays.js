import React, { Component } from "react";
import { Spin } from "antd";
import FilterableEssayList from "../../components/filterableEssayList/filterableEssayList";

export default class ManageEssays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notice: "",
      essayItemList: [],
    };
  }

  componentDidMount = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await fetch(
      "https://mojito-portfolio-backend.herokuapp.com/files/essay/" +
        sessionStorage.getItem("username"),
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
          const temEssayList = [];
          res.data.map(({ essay, image }) => {
            const { title, content, date } = essay;
            const dateObj = new Date(date);
            const createdDate = dateObj.toLocaleString();
            var imageUrl = null;
            if (image != null) {
              var { Key: imageUrl } = image;
            }

            const essayObject = {
              date: createdDate,
              name: title,
              content: content,
              thumbnail: imageUrl,
            };

            temEssayList.push(essayObject);
          });
          console.log(temEssayList);
          this.setState({
            essayItemList: temEssayList,
          });
        }
      });
  };
  render() {
    if (this.state.essayItemList.length < 1) {
      return (
        <div className="loadingSpin">
          <Spin size="large" tip="Loading..." />
        </div>
      );
    } else {
      return <FilterableEssayList essays={this.state.essayItemList} />;
    }
  }
}
