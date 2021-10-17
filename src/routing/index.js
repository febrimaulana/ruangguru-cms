import { DesktopOutlined } from "@ant-design/icons";
import { Button, Image, Layout, Menu } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import swal from "sweetalert";
import { ILLogo } from "../assets";
import { ProtectedRoute } from "../components";
import { reducer } from "../constants";
import { Klaim, Login } from "../pages";

const { Footer, Sider } = Layout;

const Routing = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };

  const onLogout = async () => {
    const check = await swal({
      title: "Apa anda yakin ?",
      text: "Anda akan keluar dari aplikasi",
      icon: "warning",
      buttons: true,
    });

    if (check) {
      dispatch({ type: reducer.PROFILE, value: {} });
      dispatch({ type: reducer.ISLOGIN, value: false });
    }
  };

  return (
    <Router>
      <ProtectedRoute path="/">
        <Switch>
          <Redirect exact from="/" to="/cms/dashboard" />
          <Route path="/cms/login" component={Login} />
          <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
                <Button type="primary" onClick={onLogout}>
                  Logout
                </Button>
              </div>
              <Route path="/cms/klaim" component={Klaim} />
              <Footer style={{ textAlign: "center" }}>
                Febri Maulana Yunus
              </Footer>
            </Layout>
          </Layout>
        </Switch>
      </ProtectedRoute>
    </Router>
  );
};

export default Routing;
