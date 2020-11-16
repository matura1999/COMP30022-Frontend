import React, { Component } from "react";
import { Empty, Spin } from 'antd';
import FilterableItemList from "../../components/filterableItemList/filterableItemList";
import url from '../../assets/constant/constant'

export default class portfolioFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:this.props.user,
      notice: "",
      fileItemList: [],
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
        path: "files",
      }),
    };
    await fetch(
      url.backendUrl + "/files",
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
            loading: false,
          });

          res.files.map(({ Key: fileUrl, LastModified: date, Size: size }) => {
            const name = fileUrl.split("/").pop();
            const type = name.split(".").pop().toUpperCase();
            const kbSize = Math.round(size / 1024);
            let fileSize = "";
            if (kbSize <= 1024) {
              fileSize = `${kbSize}KB`;
            } else {
              const mbSize = Math.round(kbSize / 1024);
              fileSize = `${mbSize}MB`;
            }
            let dateObj = new Date(date);
            const createdDate = dateObj.toLocaleString();
            const fileObject = {
              name: name,
              type: type,
              date: createdDate,
              size: fileSize,
              fileUrl: fileUrl,
            };
            this.setState({
              fileItemList: [...this.state.fileItemList, fileObject],
            });
          });
        }
      });
  };

  render() {
    const {loading} = this.state;
    if (loading) {
      return (
          <div className="loadingOrEmptyContainer">
            <Spin className="spin" size="large" tip="Loading..."/>
          </div>
      )
    } else if (this.state.fileItemList.length < 1) {
      return(
          <div className="loadingOrEmptyContainer">
            <Empty description={"This user has not uploaded any file yet."}/>
          </div>
      )
    } else{
      return (
          <div className="myPortfolioFileList">
            <FilterableItemList files={this.state.fileItemList} useFor="present"/>
          </div>
      );
    }
  }
}
