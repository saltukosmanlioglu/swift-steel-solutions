import React from "react";

import Web from "./web";
import Mobile from "./mobile";

const Menu: React.FunctionComponent = () => {
  return (
    <header>
      <Web />
      <Mobile />
    </header>
  );
};

export default Menu;
