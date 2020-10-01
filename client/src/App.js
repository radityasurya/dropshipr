import React from "react";
import {
  Container,
  Grid,
  Menu,
  Sticky,
  Ref,
  Accordion,
} from "semantic-ui-react";
import "./App.css";

import Accounts from "./components/Accounts";
import Header from "./components/Header";

const sidebarStyle = {
  background: "#fff",
  // // boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)",
  paddingLeft: "1em",
  paddingBottom: "0.1em",
  paddingTop: "0.1em",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
};

function App() {
  const [functionalRef, setFunctionalRef] = React.useState(null);

  return (
    <div className="app">
      <Header />
      <Container style={{ marginTop: "5em" }} fluid>
        <Grid padded>
          <Grid.Row columns="equal">
            <Grid.Column computer={3} largeScreen={3} widescreen={3}>
              <Sticky context={functionalRef} offset={75}>
                <div style={sidebarStyle}>
                  <Menu as={Accordion} fluid text vertical>
                    <Menu.Item header>Sort By</Menu.Item>
                    <Menu.Item name="Products" />
                  </Menu>
                </div>
              </Sticky>
            </Grid.Column>
            <Grid.Column>
              <Ref innerRef={setFunctionalRef}>
                <Container>
                  <Accounts />
                </Container>
              </Ref>
            </Grid.Column>
            <Grid.Column computer={3} largeScreen={3} widescreen={3} />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
  // }
}

export default App;
