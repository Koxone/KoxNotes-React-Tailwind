import React from "react";

function NavBarButton({ icon = "", mode = '' }) {
  return (
    <button className="w-[62px] h-8  border-neutral-50 flex justify-center items-center cursor-pointer hover:bg-neutral-700 hover:rounded-sm">
      <img src={`src/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
    </button>
  );
}

export default NavBarButton;