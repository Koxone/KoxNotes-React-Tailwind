import React from "react";
import DeleteButton from "../buttons/DeleteButton";
import ArchiveButton from "../buttons/ArchiveButton";
import CancelButton from "../buttons/CancelButton";
import SaveNoteButton from "../buttons/SaveNoteButton";
import GoBackButton from "../buttons/GoBackButton";
import { useNavigate } from "react-router-dom";

function OpenNoteHeader({  }) {
  const navigate = useNavigate();
  const goTo = () => {
    navigate('/');
  };
  return (
    <div className="flex items-center w-full pb-4.5 pt-3.5 border-b border-neutral-700 sticky top-[59px] bg-neutral-950">
      <GoBackButton styles="mr-[60px]" goTo={goTo} />
      <DeleteButton 
      icon="delete" 
      mode="darkMode"
      styles="mr-[16px]" />
      <ArchiveButton 
      icon="archive" 
      mode="darkMode"
      styles="mr-[16px]" />
      <CancelButton
      styles="mr-[32px]" />
      <SaveNoteButton />
    </div>
  );
}

export default OpenNoteHeader;
