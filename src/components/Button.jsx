import React from "react";

const Button = ({ styles }) => (
    <a href='https://discord.gg/vNpPh6XTE9'>
    <button
        type="button"
        className={`py-4 px-6 font-Poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none transition-transform transform hover:scale-95 ${styles}`}
    >
        Junte-se à nós!
    </button>
    </a>
);

export default Button;
