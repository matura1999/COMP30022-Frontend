import React, { Component } from "react";
import FilterableItemList from "../components/FilterableItemList";

export default class ManageFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notice: "",
      fileItemList: [],
    };
  }

  componentDidMount = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: sessionStorage.getItem("user"),
        path: "files",
      }),
    };
    fetch(
      "https://mojito-portfolio-backend.herokuapp.com/files",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success === false) {
          setTimeout(() => {
            this.setState({
              notice: res.error,
            });
          }, 300);
        } else {
          setTimeout(() => {
            this.setState({
              notice: res.message,
            });
          }, 300);

          // console.log("sda", res.files);
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
            console.log(fileUrl);
            const fileObject = {
              name: name,
              type: type,
              date: createdDate,
              size: fileSize,
              fileUrl: fileUrl,
            };

            // console.log("sss", fileObject);
            this.setState({
              fileItemList: [...this.state.fileItemList, fileObject],
            });
            // console.log("list", this.state.fileItemList);
          });

          // const [{ Key: fileUrl,  LastModified: date, Size: size}] = res.files;
        }
      });
  };

  render() {
    return (
      <div className="fileList">
        <FilterableItemList files={this.state.fileItemList} />
      </div>
    );
  }
}
