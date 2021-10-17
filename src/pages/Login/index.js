import React from "react";
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
import { ILLogo } from "../../assets";

const Login = () => {
  const history = useHistory();

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
                    <Form.ControlLabel>email address</Form.ControlLabel>
                    <Form.Control name="name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control
                      name="password"
                      type="password"
                      autoComplete="off"
                    />
                  </Form.Group>
                  <Form.Group>
                    <ButtonToolbar>
                      <Button
                        appearance="primary"
                        onClick={() => history.replace("/cms/klaim")}
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
