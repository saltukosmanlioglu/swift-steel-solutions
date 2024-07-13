"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollUp: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const onScrollUp = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window && window.scrollY > 350 ? setVisible(true) : setVisible(false);
    });
  }, []);

  return visible ? (
    <button
      className="fixed bottom-2 right-2 p-1 border-main-color border-solid border"
      onClick={onScrollUp}
    >
      <MdKeyboardArrowUp color="#bed86c" size={24} />
    </button>
  ) : null;
};

export default ScrollUp;
