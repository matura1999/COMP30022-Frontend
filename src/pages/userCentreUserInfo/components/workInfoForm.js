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
const { RangePicker } = DatePicker;

const WorkInfoForm = ({ records, onFinish }) => {
  // const [form] = Form.useForm();

  // const onFinish = (values) => {
  //   console.log("Received values of form:", values);
  // };

  // const handleChange = () => {
  //   form.setFieldsValue({ sights: [] });
  // };
  // const [form] = Form.useForm();
  console.log("render时从state里得到的数据", records);
  // const { dateRange, company, job, job_desc } = records;
  // console.log(dateRange, company, job, job_desc);
  // form.setFieldsValue({
  //   dateRange: dateRange,
  //   company: company,
  //   job: job,
  //   job_desc: job_desc,
  // });
  return (
    <Form
      name="work-info"
      onFinish={onFinish}
      initialValues={
        // {
        //   records: [
        //     {
        //       dateRange: [
        //         moment("2018-01-11T12:32:26.551Z"),
        //         moment("2018-02-19T12:32:26.551Z"),
        //       ],
        //       company: "John",
        //       job: "Kowalski",
        //       job_desc: "sadd",
        //     },
        //     {
        //       dateRange: [
        //         moment("2018-01-11T12:32:26.551Z"),
        //         moment("2018-02-19T12:32:26.551Z"),
        //       ],
        //       company: "Robert",
        //       job: "Trump",
        //       job_desc: "sad",
        //     },
        //   ],
        // }
        { records: records }
      }
      // autoComplete="off"
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
                          { required: true, message: "Missing company name" },
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
                          { required: true, message: "Missing job name" },
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
  );
};

export default WorkInfoForm;
