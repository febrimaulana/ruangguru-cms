import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Button, Image, Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { ILLogo } from "../assets";
import { Dashboard, Klaim, Login } from "../pages";

const { Footer, Sider } = Layout;

const Routing = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/cms/login" />
        <Route path="/cms/login" component={Login} />
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/cms/dashbaord">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/cms/klaim">Klaim</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <div
              style={{
                display: "flex",
                marginBottom: 30,
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <Image src={ILLogo} width={150} style={{ marginTop: 20 }} />
              <Button type="primary">Logout</Button>
            </div>
            <Route path="/cms/dashbaord" component={Dashboard} />
            <Route path="/cms/klaim" component={Klaim} />
            <Footer style={{ textAlign: "center" }}>Febri Maulana Yunus</Footer>
          </Layout>
        </Layout>
      </Switch>
    </Router>
  );
};

export default Routing;
