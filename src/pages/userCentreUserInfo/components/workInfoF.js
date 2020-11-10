import React from "react";

import { Form, Input, Button, Col, Row } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const rules = [{ required: true }];

const WorkInfoF = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form
      onFinish={onFinish}
      className="my-form"
      initialValues={{
        users: [
          { lastName: "John", firstName: "Kowalski" },
          { lastName: "Robert", firstName: "Trump" },
        ],
      }}
    >
      <Form.List name="users">
        {(fields, { add, remove }) => {
          /**
           * `fields` internal fill with `name`, `key`, `fieldKey` props.
           * You can extends this into sub field to support multiple dynamic fields.
           */
          return (
            <div>
              {fields.map((field, index) => (
                <Row key={field.key}>
                  <Col>
                    <Form.Item
                      name={[field.name, "lastName"]}
                      fieldKey={[field.fieldKey, "lastName"]}
                      rules={rules}
                    >
                      <Input placeholder="last name" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item
                      name={[field.name, "firstName"]}
                      fieldKey={[field.fieldKey, "firstName"]}
                      rules={rules}
                    >
                      <Input placeholder="first name" />
                    </Form.Item>
                  </Col>
                  <Col flex="none">
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: "100%" }}
                >
                  <PlusOutlined /> Add field
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WorkInfoF;
