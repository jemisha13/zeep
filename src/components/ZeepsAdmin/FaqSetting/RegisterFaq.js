import React, { Component, useState } from "react";

import {
  Layout,
  Form,
  Input,
  Button,
  Checkbox,
  Menu,
  Divider,
  DatePicker,
  Space,
  Table,
  Radio,
  Select,
  message,
} from "antd";

import "antd/dist/antd.css";
import { Link, withRouter } from "react-router-dom";
import { Row, Col } from "antd";

import BaseUrl from "../../services/axios-url";
import TopNav from "../WithAuthHeaderFooter/TopNav";
import WithAuthFooter from "../WithAuthHeaderFooter/WithAuthFooter";
import FaqSettingsAside from "./faq-settings-aside";

const axios = require("axios");

const { Header, Content, Footer, Sider } = Layout;
const { RangePicker } = DatePicker;

const { SubMenu } = Menu;
const { TextArea } = Input;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const compLayout = {
  labelCol: { span: 4 },
  wrapperCol: { offset: 0, span: 20 },
};
const regLayout = {
  labelCol: { span: 8 },
  wrapperCol: { offset: 0, span: 23 },
};
const { Option } = Select;

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function GoBack() {
  window.history.back();
}

const columns = [
  {
    title: "Number",
    dataIndex: "number",
    // render: text => <a>{text}</a>,
  },
  {
    title: "Content",
    dataIndex: "content",
  },
  {
    title: "Setting",
    dataIndex: "setting",
    render: () => (
      <Button className="theme-btn-default ">
        <Link to="#">faq</Link>
      </Button>
    ),
  },
];
const data = [
  {
    key: "1",
    number: "1",
    content: "Lorem ipsum",
    setting: "edit",
  },
  {
    key: "2",
    number: "2",
    content: "Lorem ipsum",
    setting: "edit",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};
function handleSelectChange(value) {
  console.log(`selected ${value}`);
}

class RegisterFaq extends Component {
  state = {
    loading: false,
    size: "large",
  };

  formRef = React.createRef();

  onFinish = (values) => {
    console.log("Success:", values);
    this.setState({ loading: true });

    axios
      .post(BaseUrl + "/adminapi/InsertFAQ", {
        question: values.faq_question,
        answer: values.faq_answer,
      })
      .then((res) => {
        // console.log(res)
        if (res.data.status == 1) {
          message.success("?????? ???????????????.");
          GoBack();
          // this.formRef.current.resetFields();
        } else {
          message.success(res.data.message);
        }
        this.setState({ loading: false });
      })
      .catch((error) => {
        console.log(error);
        message.error("?????? ??????????????????.");
        this.setState({ loading: false });
      });
  };

  render() {
    const { loading, size } = this.state;

    return (
      <Layout>
        <TopNav />

        <Content>
          <Layout className="site-layout-background">
            <FaqSettingsAside />

            <Content className="cs-admin-basic-block">
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={onFinishFailed}
                ref={this.formRef}
              >
                <Row>
                  <Col
                    xs={{ span: 20 }}
                    sm={{ span: 20 }}
                    lg={{ span: 20 }}
                    className="flex-center cs-admin-basic-info"
                  >
                    <p className="m-0">FAQ ?????? </p>
                  </Col>
                  <Col
                    className="flex-center cs-admin-basic-info-button"
                    xs={{ span: 4 }}
                    sm={{ span: 4 }}
                    lg={{ span: 4 }}
                  >
                    <Form.Item>
                      <Button
                        loading={loading}
                        type="primary"
                        className="theme-btn float-right"
                        shape="round"
                        htmlType="submit"
                        size={size}
                      >
                        FAQ ??????
                      </Button>
                    </Form.Item>

                    {/*  
                      <Button className="theme-btn-default float-right" shape="round" style={{ 'marginRight': '20px' }}>
                        <Link to="/member-setting" >
                          Back to list
                        </Link>
                      </Button> */}
                  </Col>

                  <Divider className="cs-admin-basic-divider" />

                  <Col
                    className="cs-admin-company cs-admin-faq-title"
                    span={24}
                  >
                    FAQ ??????
                  </Col>

                  <Col
                    className="cs-admin-terms"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 24 }}
                  >
                    <Form.Item
                      {...compLayout}
                      label="FAQ ??????"
                      className="m-0"
                      name="faq_question"
                      rules={[
                        {
                          required: true,
                          message: "????????? ??????????????????",
                        },
                      ]}
                    >
                      <Input.TextArea
                        rows={8}
                        placeholder="Q1. ????????? ?????? ???????????????????"
                      />
                    </Form.Item>
                  </Col>

                  <Col
                    className="cs-admin-terms"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 24 }}
                  >
                    <Form.Item
                      {...compLayout}
                      label="FAQ ??????"
                      className="m-0"
                      name="faq_answer"
                      rules={[
                        {
                          required: true,
                          message: "????????? ??????????????????",
                        },
                      ]}
                    >
                      <Input.TextArea
                        rows={8}
                        placeholder="????????? ?????? ?????? ???????????? ????????? ???????????? ????????? ??? ?????? 
????????? ??????????????????! :)

??????1
????????? ?????????????????? ?????? ????????????!
??????2
???????????? ?????? ???????????? ?????? ????????????!
??????3
?????? ????????? ??????????????? ???????????????!
??????4
??? ???????????? ?????? ??????????????????!"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Content>
          </Layout>
        </Content>

        <WithAuthFooter />
      </Layout>
    );
  }
}

export default RegisterFaq;
