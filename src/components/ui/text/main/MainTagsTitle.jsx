import React from "react";
import MainSubtitle from "./MainSubtitle";

function MainTagsTitle({ text = "", tag = "", subtitle = "" }) {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start">
      <h2 className="text-2xl font-bold leading-[120%] font-[Inter] text-neutral-400 text-left w-full mb-4">
        {text} <span className="text-white">{tag}</span>
      </h2>
      <MainSubtitle text={subtitle} />
    </div>
  );
}

export default MainTagsTitle;
