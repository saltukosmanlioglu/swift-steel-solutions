import React from "react";

interface TextAreaProps {
  name: string;
  placeholder: string;
}

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  name,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <textarea
        className="bg-transparent border-b-0.5 border-00007 p-4 outline-none w-full font-medium text-sm text-black"
        name={name}
        placeholder={placeholder}
        required
        rows={12}
      />
    </div>
  );
};

export default TextArea;
