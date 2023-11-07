import React from "react";

const Button = ({ text, link, styles }) => (
  <a href={link}>
    <button
      type="button"
      className={`py-4 px-6 font-Poppins font-medium text-[18px] bg-blue-gradient rounded-[10px] transform transition-transform hover:scale-95 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 ${styles}`}
    >
      {text}
    </button>
  </a>
);

export default Button;
