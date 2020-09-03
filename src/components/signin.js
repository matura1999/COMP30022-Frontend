import React, { Component } from 'react';
import { Form, Input, Button, message, Select } from 'antd';

class Signin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            data: ''
        };

        this.onFinish = this.onFinish.bind(this);
        this.onFinishedFailed = this.onFinishFailed.bind(this);
    };


    onFinish = values => {
        console.log('Success', values);

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ username: values.username })
    };

    fetch('/user/', requestOptions)
    .then(res=> res.json())
    .then(res => {
        this.setState({
            username: values.username,
            password: values.password,
            data: res.data[0]});
            console.log("Request sent: validating user");
            //Check username
            if (this.state.data) {
                //Check password
                if (this.state.data.password == this.state.password) {
                    sessionStorage.setItem('authorised', true);
                    window.location.href = "/itemmaster";
                } else {
                    message.error("Login unsuccessful.");
                }
            } else {
                message.error("Login unsucccessful.");
            }
        });
    }
}