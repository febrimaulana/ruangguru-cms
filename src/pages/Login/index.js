import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  ButtonToolbar,
  Container,
  Content,
  FlexboxGrid,
  Form,
  Panel,
} from "rsuite";
import { Image } from "semantic-ui-react";
import { notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ILLogo } from "../../assets";
import { loginEmailPassword } from "../../redux";
import { reducer } from "../../constants";

const Login = () => {
  const { isLogin } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.global);
  const history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  if (isLogin) {
    history.goBack();
    return;
  }

  const onMasuk = async () => {
    try {
      const result = await dispatch(loginEmailPassword(input));
      dispatch({ type: reducer.PROFILE, value: result });
      dispatch({ type: reducer.ISLOGIN, value: true });
      history.replace("/cms/dashboard");
    } catch (e) {
      notification["error"]({
        message: "Gagal Login",
        description: e.message,
      });
    }
  };

  return (
    <div className="show-fake-browser login-page">
      <Container>
        <Content>
          <Image
            src={ILLogo}
            size="medium"
            centered
            style={{ marginTop: 50, marginBottom: 20 }}
          />
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Login</h3>} bordered>
                <Form fluid>
                  <Form.Group>
                    <Form.ControlLabel>Email Address</Form.ControlLabel>
                    <Form.Control
                      name="name"
                      onChange={(value) => setInput({ ...input, email: value })}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control
                      name="password"
                      type="password"
                      autoComplete="off"
                      onChange={(value) =>
                        setInput({ ...input, password: value })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <ButtonToolbar>
                      <Button
                        appearance="primary"
                        onClick={onMasuk}
                        loading={loading}
                      >
                        Login
                      </Button>
                    </ButtonToolbar>
                  </Form.Group>
                </Form>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </div>
  );
};

export default Login;
