"use client";
import React, { useState } from "react";

import { MenuProps } from ".";

const Web: React.FunctionComponent<MenuProps> = ({ menuItems }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div>
      <div className="absolute left-8 top-8">S.</div>
      <button
        className="absolute right-8 top-8"
        onClick={() => setIsActive(true)}
      >
        S.
      </button>
    </div>
  );
};

export default Web;
