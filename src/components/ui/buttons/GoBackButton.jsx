import React from "react";
import { useNavigate } from "react-router-dom";

function GoBackButton({ icon = "arrow", mode = "darkMode", styles = "", text = "Go Back" }) {
  const navigate = useNavigate();
  const goTo = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={goTo}
      className={`w-[76px] h-[18px] cursor-pointer text-white ${styles} whitespace-nowrap text-sm font-[Inter] font-normal flex gap-1 justify-center items-center`}
    >
      <img src={`src/assets/images/icon-${icon}-left-${mode}.svg`} alt="icon" />
      {text}
    </button>
  );
}

export default GoBackButton;
