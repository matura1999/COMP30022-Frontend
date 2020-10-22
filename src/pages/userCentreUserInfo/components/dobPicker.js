import React from "react";
// import ReactDOM from "react-dom";

import { DatePicker } from "antd";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";

const DobPicker = ({ dob }) => {
  console.log(dob);
  return (
    <div>
      <DatePicker defaultValue={moment()} format={dateFormat} />
    </div>
  );
};

export default DobPicker;
