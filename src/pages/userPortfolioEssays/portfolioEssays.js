import React, { Component } from "react";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";
import { Empty, Spin } from "antd";
// import "./portfolioEssays.scss";
import PortfolioFilterableEssayList from "./portfolioFilterableEssayList";
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
      "https://mojito-portfolio-backend.herokuapp.com/files/essay/" +
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
    console.log(essayItemList);
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
      return <PortfolioFilterableEssayList essays={this.state.essayItemList} />;
    }
    // const rows = [];
    // essayItemList.forEach(({ id, name, thumbnail, content, date }) => {
    //   var Thumbnail = null;
    //   if(thumbnail){
    //     Thumbnail = (
    //         <img width="150px" height="100px" src={`https://mojito-eportfolio.s3-ap-southeast-2.amazonaws.com/${thumbnail}`} alt="THUMBNAIL" />
    //     );
    //   } else {
    //     Thumbnail = "No Thumbnail"
    //   }

    //   rows.push(
    //       <div className="essays__item">
    //         <div className="essays__thumbnail">{Thumbnail}</div>

    //         <div className="essays__info">
    //           <Link
    //               exact
    //               to={
    //                 "/userPortfolio/" +
    //                 username +
    //                 "/essays#" +
    //                 id
    //               }
    //           >
    //             <div className="essays__title">{name}</div>
    //             <div className="essays__content">{content}</div>
    //             <div className="essays__date">{date}</div>
    //           </Link>
    //         </div>
    //       </div>
    //   );
    // });
    // return rows;
  }
}

export default withRouter(portfolioEssays);
