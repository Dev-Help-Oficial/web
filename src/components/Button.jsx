import React from "react";

const Button = ({ text, link, styles, background, hover, textcolor }) => (
  <a href={link}>
    <button
      type="button"
      className={`${styles} py-4 px-6 font-Poppins font-medium text-[18px] rounded-[10px] transform transition-transform hover:scale-95 hover:${hover} focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 bg-${background}`}
    >
      <span className={`text-${textcolor}`}>{text}</span>
    </button>
  </a>
);

export default Button;
