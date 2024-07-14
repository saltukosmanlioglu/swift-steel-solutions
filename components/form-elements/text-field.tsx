import React, { HTMLInputTypeAttribute } from "react";

interface TextFieldProps {
  name: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({
  name,
  placeholder,
  type,
}) => {
  return (
    <div className="w-full">
      <input
        className="bg-transparent border-b-0.5 border-00007 p-4 outline-none w-full font-medium text-sm text-black"
        name={name}
        placeholder={placeholder}
        required
        type={type}
      />
    </div>
  );
};

export default TextField;
