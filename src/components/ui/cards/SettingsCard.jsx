import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";

function SettingsCard({ text = "", styles = "", icon = "", mode = '', param = '' }) {
  const navigate = useNavigate();
  const params = useParams();
  
  const handleClick = () => {
    if (param === "theme") {
      navigate("/theme");
    } else if (param === "font") {
      navigate("/font");
    } else if (param === "change") {
      navigate("/changepassword");
    } else if (param === "logout") {
      // Handle logout logic here
      // Por ejemplo:
      // logoutUser();
      navigate("/login");
    } else {
      navigate("/settings");
    }
  };
  
  return (
    <button
      onClick={handleClick}
      className={`${styles} font-normal text-sm font-[Inter] flex items-center gap-2 w-full cursor-pointer hover:bg-neutral-700 hover:rounded-sm p-2`}
    >
      <img className="w-5 h-5" src={`src/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
      {text}
    </button>
  );
}

export default SettingsCard;