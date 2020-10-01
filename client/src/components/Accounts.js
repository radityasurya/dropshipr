import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Card,
  Grid,
  Placeholder,
  Segment,
  Item,
  Input,
} from "semantic-ui-react";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchAccount, setSearchAccount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios("http://localhost:5000/api/accounts/");
      setAccounts(result.data.docs);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const onChangeSearchAccount = (e) => {
    const searchAccount = e.target.value;
    setIsLoading(true);
    setSearchAccount(searchAccount);
    setIsLoading(false);
  };

  const filterAccounts = accounts.filter((account) => {
    return account.name.toLowerCase().includes(searchAccount);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Grid columns={3} stackable>
          {[...Array(3)].map((e, i) => {
            return (
              <Grid.Column key={i}>
                <Segment>
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length="medium" />
                      <Placeholder.Line length="short" />
                    </Placeholder.Paragraph>
                  </Placeholder>
                </Segment>
              </Grid.Column>
            );
          })}
        </Grid>
      ) : (
        <div>
          <Segment>
            <Input
              fluid
              icon="search"
              placeholder="Search"
              value={searchAccount}
              onChange={onChangeSearchAccount}
            />
          </Segment>
          <h3>Accounts ({accounts.length})</h3>
          <Card.Group itemsPerRow="3">
            {(searchAccount === "" ? accounts : filterAccounts).map(
              (account) => (
                <Card key={account.id} link>
                  <Card.Content>
                    <Item.Group>
                      <Item>
                        <Item.Content>
                          <Item.Header as="a">
                            {account.name}{" "}
                            {/* <Label style={{ textTransform: "capitalize" }} /> */}
                          </Item.Header>
                          <Item.Meta>
                            <span>
                              {account.email ? account.email : account.name}
                            </span>
                          </Item.Meta>
                          <Item.Extra>
                            <span>
                              {account.type} · <b>1999</b> products
                            </span>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </Card.Content>
                </Card>
              )
            )}
          </Card.Group>
        </div>
      )}
    </Container>
  );
};

export default Accounts;
