import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Space,
  DatePicker,
  Row,
  Col,
  message,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import url from '../../assets/constant/constant'
const { RangePicker } = DatePicker;

export default class UserInfoWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      records: [],
    };
  }

  onFinish = (values) => {
    console.log(values);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: sessionStorage.getItem("username"),
        records: values.records,
      }),
    };
    fetch(
      url.backendUrl + "/user/info/work",
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
          setTimeout(() => {}, 300);
        } else {
          message.success(`Your changes have been saved.`);
          console.log(res.message);
        }
      });
  };

  componentDidMount = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await fetch(
      url.backendUrl + "/user/info/work/" +
        sessionStorage.getItem("username"),
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success === false) {
          setTimeout(() => {}, 300);
        } else {
          this.setState({ records: res.data.records });
        }
      });

    const newRecords = this.state.records.map(
      ({ dateRange: [from, to], company, job, job_desc }) => {
        return {
          dateRange: [moment(from), moment(to)],
          company,
          job,
          job_desc,
        };
      }
    );
    this.setState({ records: newRecords, loaded: true });
  };

  render() {
    return (
      <div>
        {this.state.loaded && (
          <div>
            {
              <Form
                name="work-info"
                onFinish={this.onFinish}
                initialValues={{ records: this.state.records }}
              >
                <Form.List name="records">
                  {(fields, { add, remove }) => {
                    return (
                      <div>
                        {fields.map((field) => (
                          <Space key={field.key} align="baseline">
                            <Row gutter={16}>
                              <Col span={8}>
                                <Form.Item
                                  {...field}
                                  name={[field.name, "dateRange"]}
                                  fieldKey={[field.fieldKey, "dateRange"]}
                                  rules={[
                                    {
                                      type: "array",
                                      required: true,
                                      message: "Please select time!",
                                    },
                                  ]}
                                >
                                  <RangePicker />
                                </Form.Item>
                              </Col>
                              <Col span={8}>
                                <Form.Item
                                  {...field}
                                  name={[field.name, "company"]}
                                  fieldKey={[field.fieldKey, "company"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing company name",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Company" />
                                </Form.Item>
                              </Col>
                              <Col span={8}>
                                <Form.Item
                                  {...field}
                                  name={[field.name, "job"]}
                                  fieldKey={[field.fieldKey, "job"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing job name",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Job" />
                                </Form.Item>
                              </Col>
                              <Col span={24}>
                                <Form.Item
                                  {...field}
                                  name={[field.name, "job_desc"]}
                                  fieldKey={[field.fieldKey, "job_desc"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Missing job description",
                                    },
                                  ]}
                                >
                                  <Input.TextArea
                                    placeholder="Description"
                                    showCount
                                    maxLength={300}
                                  />
                                </Form.Item>
                              </Col>
                            </Row>

                            <MinusCircleOutlined
                              onClick={() => {
                                remove(field.name);
                              }}
                            />
                          </Space>
                        ))}

                        <Form.Item>
                          <Button
                            type="dashed"
                            onClick={() => {
                              add();
                            }}
                            block
                          >
                            <PlusOutlined /> Add Work Record
                          </Button>
                        </Form.Item>
                      </div>
                    );
                  }}
                </Form.List>

                <Form.Item>
                  <Button
                    className="userCentre__formButton"
                    type="primary"
                    htmlType="submit"
                    size="large"
                  >
                    Save
                  </Button>
                </Form.Item>
              </Form>
            }
          </div>
        )}
      </div>
    );
  }
}
