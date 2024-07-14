import React, { ButtonHTMLAttributes } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonProps {
  buttonprops?: ButtonHTMLAttributes<any>;
  backgroundColor?: string;
  icon?: React.ReactNode;
  iconBackgroundColor?: string;
  text: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  backgroundColor,
  icon,
  iconBackgroundColor,
  text,
  ...buttonprops
}) => {
  const bgColor = backgroundColor || "bg-orange";
  const iconBgColor = iconBackgroundColor || "bg-black";
  const padding = bgColor ? "p-3" : "p-0";

  return (
    <button
      {...buttonprops}
      className={`${bgColor} ${padding} rounded-full flex items-center`}
    >
      {text && (
        <p className={`${bgColor ? "px-6" : "pr-6"} text-xs tracking-widest`}>
          {text}
        </p>
      )}
      <div className={`${iconBgColor} rounded-full p-3`}>
        {icon ? icon : <FaArrowRight color="#ff9800" size={16} />}
      </div>
    </button>
  );
};

export default Button;
