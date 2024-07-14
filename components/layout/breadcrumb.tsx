import React from "react";
import Link from "next/link";
import { CgFormatSlash } from "react-icons/cg";
import { FaArrowDown } from "react-icons/fa6";

import Button from "../button";

type Position = "center" | "start";
type Theme = "black" | "smoke";

interface BreadcrumbItemProps {
  text: string;
  href?: string;
}

interface BreadcrumbProps {
  description: string | React.ReactNode;
  items: Array<BreadcrumbItemProps>;
  position?: Position;
  theme?: Theme;
}

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  description,
  items,
  position = "start",
  theme = "smoke",
}) => {
  const bgColor = theme === "smoke" ? "bg-white" : "bg-black";
  const textColor = theme === "smoke" ? "text-black" : "text-white";
  const alignment = position === "center" ? "text-center" : "text-left";

  return (
    <div className={`${bgColor} ${textColor} py-32 px-40`}>
      <div
        className={`${
          position === "center" ? "flex items-center justify-center" : ""
        }`}
      >
        <div className="flex items-center gap-x-1 tracking-widest">
          <Link
            className="font-light text-black hover:text-orange"
            href="/home"
          >
            HOME
          </Link>
          <CgFormatSlash color="#000" size={24} />
          {items?.map((item, index) =>
            item.href ? (
              <div key={index}>
                <button>
                  <p className="text-00006">{item.text}</p>
                </button>
                <CgFormatSlash color="#000" size={24} />
              </div>
            ) : (
              <p key={index} className="text-00006 font-light">
                {item.text}
              </p>
            )
          )}
        </div>
      </div>
      <div className={`${alignment} my-24`}>
        {typeof description === "string" ? (
          <p className="text-7xl font-medium">{description}</p>
        ) : (
          <div>{description}</div>
        )}
      </div>
      <div
        className={`${
          position === "center" ? "flex items-center justify-center" : ""
        }`}
      >
        <Button
          backgroundColor="bg-transparent"
          icon={<FaArrowDown color="#000" size={16} />}
          iconBackgroundColor="bg-gray"
          text="SEND MESSAGE"
        />
      </div>
    </div>
  );
};

export default Breadcrumb;
