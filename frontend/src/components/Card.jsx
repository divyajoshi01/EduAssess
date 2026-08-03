import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border">
      <h2 className="text-xl font-bold text-gray-700 mb-4">
        {title}
      </h2>

      {children}
    </div>
  );
};

export default Card;