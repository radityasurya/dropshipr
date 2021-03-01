import React from "react";

import { Menu, Item } from "semantic-ui-react";
const Header = () => {
  return (
    <Menu size="massive" borderless fixed="top">
      <Item>
        <Item.Content verticalAlign="middle">
          <Item.Header>Dropshipr</Item.Header>
        </Item.Content>
      </Item>
    </Menu>
  );
};

export default Header;
