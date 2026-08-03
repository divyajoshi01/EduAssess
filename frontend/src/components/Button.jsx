import React from "react";

const Button = ({
  text,
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 disabled:bg-gray-400 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;