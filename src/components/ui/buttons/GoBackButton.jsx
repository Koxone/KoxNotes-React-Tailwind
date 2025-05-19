import React from "react";

function GoBackButton({ icon = "arrow", mode = "darkMode", styles = "", text = "Go Back" }) {
  return (
    <button className={`w-[76px] h-[18px] cursor-pointer text-white ${styles} whitespace-nowrap text-sm font-[Inter] font-normal flex gap-1 justify-center items-center`}>
      <img src={`src/assets/images/icon-${icon}-left-${mode}.svg`} alt="icon" />
      {text}
    </button>
  );
}

export default GoBackButton;
