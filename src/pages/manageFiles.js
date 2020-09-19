import React, { Component } from "react";
import FileItem from "../components/FileItem";

const fileItemList = [
  {
    name: "File Name 1",
    type: "PDF",
    date: "2020-09-01 01:01:00",
    size: "2 MB",
  },
  {
    name: "File Name 2",
    type: "ZIP",
    date: "2020-09-01 01:01:00",
    size: "200 KB",
  },
  {
    name: "File Name 3",
    type: "HTML",
    date: "2020-09-01 01:01:00",
    size: "10 MB",
  },
  {
    name: "File Name 4",
    type: "CSS",
    date: "2020-09-01 01:01:00",
    size: "2 MB",
  },
  {
    name: "File Name 5",
    type: "JS",
    date: "2020-09-01 01:01:00",
    size: "2 MB",
  },
  {
    name: "File Name 6",
    type: "DOC",
    date: "2020-09-01 01:01:00",
    size: "2 MB",
  },
];

export default class ManageFiles extends Component {
  render() {
    return (
      <div className="fileList">
        {fileItemList &&
          fileItemList.map(({ name, type, date, size }) => (
            <FileItem name={name} type={type} date={date} size={size} />
          ))}
      </div>
    );
  }
}
