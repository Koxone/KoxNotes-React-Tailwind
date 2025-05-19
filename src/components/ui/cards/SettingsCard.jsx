import React from "react";

function SettingsCard({ text = "", styles = "", icon = "", mode = '' }) {
  return (
    <div className={`${styles} font-normal text-sm font-[Inter] flex items-center gap-2 w-full cursor-pointer hover:bg-neutral-700 hover:rounded-sm p-2`}>
      <img className="w-5 h-5" src={`src/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
      {text}
    </div>
  );
}

export default SettingsCard;
