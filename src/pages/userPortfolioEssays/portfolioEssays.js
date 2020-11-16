import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import { Empty, Spin } from "antd";
import PortfolioFilterableEssayList from "./portfolioFilterableEssayList";
import url from '../../assets/constant/constant'
class portfolioEssays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      username: props.match.params.username,
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
      url.backendUrl + "/files/essay/" +
        this.state.username,
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
          this.setState({
            loading: false,
          });
        } else {
          const temEssayList = [];
          res.data.map(({ essay, image }) => {
            const { _id, title, content, date } = essay;
            const dateObj = new Date(date);
            const createdDate = dateObj.toLocaleString();
            var imageUrl = null;
            if (image != null) {
              var { Key: imageUrl } = image;
            }

            const essayObject = {
              id: _id,
              date: createdDate,
              name: title,
              content: content,
              thumbnail: imageUrl,
            };

            temEssayList.push(essayObject);
          });
          this.setState({
            essayItemList: temEssayList,
            loading: false,
          });
        }
      });
  };

  render() {
    const { essayItemList, loading, username } = this.state;
    if (loading) {
      return (
        <div className="loadingOrEmptyContainer">
          <Spin className="spin" size="large" tip="Loading..." />
        </div>
      );
    } else if (this.state.essayItemList.length < 1) {
      return (
        <div className="loadingOrEmptyContainer">
          <Empty description={"This user has not uploaded any essay."} />
        </div>
      );
    } else {
      return (
        <PortfolioFilterableEssayList
          essays={essayItemList}
          username={username}
        />
      );
    }
  }
}

export default withRouter(portfolioEssays);
