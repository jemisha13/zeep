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
  message,
  Select,
} from "antd";

import "antd/dist/antd.css";
import { Link, withRouter } from "react-router-dom";
import { Row, Col } from "antd";

import BaseUrl from "../../services/axios-url";
import TopNav from "../WithAuthHeaderFooter/TopNav";
import WithAuthFooter from "../WithAuthHeaderFooter/WithAuthFooter";
import MemberSettingsAside from "./member-settings-aside";

const axios = require("axios");

const { Header, Content, Footer, Sider } = Layout;
const { RangePicker } = DatePicker;

const { SubMenu } = Menu;

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

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function GoBack() {
  window.history.back();
}

class RegisterMember extends Component {
  state = {
    email_front: "",
    email_domain: "@",
    email_extension: "",
    loading: false,
  };
  formRef = React.createRef();

  onEmailExtensionChange = (value) => {
    console.log("e.target", value);
    // this.setState({
    //   email_domain: this.state.email_domain + value,
    // });

    this.formRef.current.setFieldsValue({
      email_domain: "@" + value,
    });
  };
  // onEmailDomainChange = (e) => {
  //   this.setState({
  //     email_domain: e.target.value,
  //   });
  //   this.formRef.current.setFieldsValue({
  //     email_domain: e.target.value,
  //   });
  // };
  onFinish = (values) => {
    this.setState({ loading: true });
    console.log("Success:", values);
    const email = values.email_front + values.email_domain;
    axios
      .post(BaseUrl + "/adminapi/InsertNewMember", {
        name: values.name,
        mobile: values.mobile,
        address: values.address,
        detailAddress: values.detail_address,
        email: email,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        this.setState({ loading: false });
        if (res.data.status == 1) {
          message.success("????????? ??????????????? ?????????????????????.");
        } else {
          message.warning(res.data.message);
        }
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
        message.error("?????? ??????????????????.");
      });
  };

  render() {
    const { loading } = this.state;
    const { Option } = Select;
    console.log("this.state", this.state);

    return (
      <Layout>
        <TopNav />

        <Content>
          <Layout className="site-layout-background">
            <MemberSettingsAside />

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
                    className="cs-admin-basic-info flex-center"
                    xs={{ span: 24 }}
                    sm={{ span: 18 }}
                    lg={{ span: 18 }}
                  >
                    <p className="m-0">?????? ??????</p>
                  </Col>
                  <Col
                    className="cs-admin-basic-info-button cs-admin-member-registration"
                    xs={{ span: 24 }}
                    sm={{ span: 6 }}
                    lg={{ span: 6 }}
                  >
                    <Button
                      loading={loading}
                      type="primary"
                      className="theme-btn float-right"
                      shape="round"
                      htmlType="submit"
                    >
                      ?????? ??????
                    </Button>

                    <Button
                      className="theme-btn-default float-right"
                      shape="round"
                      style={{ marginRight: "20px" }}
                    >
                      <Link to="/member-setting">?????? ??????</Link>
                    </Button>
                  </Col>

                  <Divider className="cs-admin-basic-divider" />

                  <Col className="cs-admin-company" xs={{ span: 24 }}>
                    ?????? ??????
                  </Col>

                  <Col
                    className="cs-admin-form-input"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 24 }}
                  >
                    <Form.Item
                      {...compLayout}
                      label="??????"
                      name="name"
                      className="m-0"
                      rules={[
                        { required: true, message: "????????? ????????? ?????????!" },
                      ]}
                    >
                      <Input placeholder="????????? ??????????????????." />
                    </Form.Item>
                  </Col>

                  <Col
                    className="cs-admin-form-input cs-admin-member-form-input"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 12 }}
                  >
                    <Form.Item
                      {...regLayout}
                      label="????????????(??????)"
                      name="password"
                      className="m-0"
                      rules={[
                        {
                          required: true,
                          message: "??????????????? ????????? ?????????!",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="??????????????? ??????????????????."
                        className="cs-admin-password"
                      />
                    </Form.Item>
                  </Col>

                  <Col
                    className="cs-admin-form-input cs-admin-member-form-input"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 12 }}
                  >
                    <Form.Item
                      {...regLayout}
                      name="confirm"
                      label="???????????? ??????"
                      className="m-0"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "??????????????? ??????????????????",
                        },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              "??????????????? ???????????? ????????????!"
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password
                        placeholder="??????????????? ??????????????????."
                        className="cs-admin-password"
                      />
                    </Form.Item>
                  </Col>

                  <Col
                    className="cs-admin-form-input"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 12 }}
                  >
                    <Form.Item
                      {...regLayout}
                      label="????????? ??????"
                      name="mobile"
                      className="m-0"
                      rules={[
                        {
                          required: true,
                          message: "????????? ????????? ????????? ?????????!",
                        },
                      ]}
                    >
                      <Input placeholder="??????????????????." />
                    </Form.Item>
                  </Col>

                  <Col
                    className="cs-admin-form-input"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 12 }}
                  >
                    <Form.Item
                      {...regLayout}
                      label="????????????"
                      name="leave_status"
                      className="m-0"
                      rules={[
                        {
                          required: false,
                          message: "Please input your Leave Status!",
                        },
                      ]}
                    >
                      <Input value="???" readOnly placeholder="???" />
                    </Form.Item>
                  </Col>

                  <Col
                    className="cs-admin-form-input cs-admin-registermember-email-input"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 24 }}
                  >
                    <Form.Item className="" label="?????????">
                      <Input.Group compact style={{ paddingLeft: "20px" }}>
                        <Form.Item
                          style={{ margin: "35px 0" }}
                          name="email_front"
                          rules={[
                            {
                              required: true,
                              message: "????????? ????????? ?????????????????? ",
                            },
                          ]}
                        >
                          <Input placeholder="?????????" />
                        </Form.Item>
                        <Form.Item
                          style={{ paddingLeft: "5px", margin: "35px" }}
                          name="email_domain"
                          // onChange={this.onEmailDomainChange}
                          rules={[
                            {
                              required: true,
                              message: "????????? ????????? ?????????????????? ",
                            },
                          ]}
                        >
                          <Input placeholder="??????????????????." defaultValue="@" />
                        </Form.Item>
                        <Form.Item
                          style={{ paddingLeft: "5px", margin: "35px 0" }}
                          name="email_extension"
                          rules={[
                            {
                              required: true,
                              message: "??????????????????",
                            },
                          ]}
                        >
                          <Select
                            placeholder="??????????????????."
                            onChange={this.onEmailExtensionChange}
                          >
                            <Option value="naver.com">naver.com</Option>
                            <Option value="hanmail.com">hanmail.com</Option>
                            <Option value="gmail.com">gmail.com</Option>
                          </Select>
                        </Form.Item>
                      </Input.Group>
                    </Form.Item>
                  </Col>

                  <Col
                    className="cs-admin-form-input with-border"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    lg={{ span: 24 }}
                  >
                    <Form.Item label="??????" className="m-0">
                      <Input.Group
                        style={{ display: "flex", paddingLeft: "20px" }}
                      >
                        <Form.Item
                          {...compLayout}
                          name="address"
                          className="m-0"
                          style={{ margin: "35px 0" }}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          className="m-0"
                          {...compLayout}
                          name="detailAddress"
                          style={{ paddingLeft: "5px", margin: "35px" }}
                          // onChange={this.onEmailDomainChange}
                        >
                          <Input />
                        </Form.Item>
                      </Input.Group>
                    </Form.Item>
                    {/* <Form.Item
                      {...compLayout}
                      // className="m-0"
                      name="detail_address"
                      rules={[
                        {
                          required: true,
                          message: "??????????????? ????????? ?????????! (???/???/?????? ???)",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item> */}
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

export default RegisterMember;
