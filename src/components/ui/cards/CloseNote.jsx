import React from "react";
import Tag from "./Tag";

function CloseNote({ title = "", date = "", tagText = "" }) {
  return (
    <div className="w-full flex flex-col gap-3.5 p-2 border-b border-neutral-800 cursor-pointer">
      <p className="text-[16px] font-[Inter] font-semibold leading-[120%] text-white text-left tracking-[-0.3px]">{title}</p>
      <div className="flex flex-row gap-2">
        <Tag text="Dev" />
        <Tag text="React" />
      </div>
      <p className="text-xs font-[Inter] font-normal leading-[120%] text-neutral-300 text-left tracking-[-0.3px]">{date}</p>
    </div>
  );
}

export default CloseNote;
