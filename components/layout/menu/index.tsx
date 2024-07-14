import React from "react";

import Web from "./web";
import Mobile from "./mobile";

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
