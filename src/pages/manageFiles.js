import React, { Component } from "react";
import FilterableItemList from "../components/FilterableItemList";

const fileItemList = [
  {
    name: "File Name 1 Alice",
    type: "PDF",
    date: "2020-09-01 01:01:00",
    size: "2 MB",
  },
  {
    name: "File Name 2 bob",
    type: "ZIP",
    date: "2020-09-01 01:01:00",
    size: "200 KB",
  },
  {
    name: "File Name 3 Chris",
    type: "HTML",
    date: "2020-09-01 01:01:00",
    size: "10 MB",
  },
  {
    name: "a File Name 4 hehe1",
    type: "CSS",
    date: "2020-09-01 01:01:00",
    size: "2 MB",
  },
  {
    name: "x File Name 5 hehe2",
    type: "JS",
    date: "2020-09-01 01:01:00",
    size: "2 MB",
  },
  {
    name: "File Name 6 he3",
    type: "DOC",
    date: "2020-09-01 01:01:00",
    size: "2 MB",
  },
];

export default class ManageFiles extends Component {
  constructor(props){
    super(props);
    this.state = {
      notice: ''
    }
  }
  
  componentDidMount = () => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ user: sessionStorage.getItem('user'), path: "files" })
    };
    fetch('https://mojito-portfolio-backend.herokuapp.com/files', requestOptions)
        .then(res => res.json())
        .then(res => {
            console.log(res)
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
            }
      })
  }


  render() {
    return (
      <div className="fileList">
        <FilterableItemList files={fileItemList} />
      </div>
    );
  }
}
