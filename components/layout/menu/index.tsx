import React from "react";

import Mobile from "./mobile";
import Web from "./web";

export interface MenuItemProps {
  title: string;
  url: string;
}

export interface MenuProps {
  menuItems: Array<MenuItemProps>;
}

const Menu: React.FunctionComponent<MenuProps> = ({ menuItems }) => {
  return (
    <header>
      <Web menuItems={menuItems} />
      <Mobile menuItems={menuItems} />
    </header>
  );
};

export default Menu;
