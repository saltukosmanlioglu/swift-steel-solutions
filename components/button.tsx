import React from "react";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ icon, text }) => {
  return (
    <button className="bg-orange rounded-full p-3 flex items-center">
      {text && (
        <p className="text-black px-6 text-sm font-light tracking-widest">{text}</p>
      )}
      <div className="bg-black rounded-full p-3">
        {icon ? icon : <FaArrowRight color="#ff9800" size={16} />}
      </div>
    </button>
  );
};

export default Button;
