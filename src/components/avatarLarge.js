import React, { Component } from "react";
import {Avatar,} from "antd";
import {UserOutlined,} from "@ant-design/icons";

export default class AvatarLarge extends Component {
    render() {
        return(
            <Avatar
                style={{ backgroundColor: "#8dc63f" }}
                size={80}
                icon={<UserOutlined />}
            />
        )
    }
}