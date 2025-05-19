import React from "react";
import MainTitle from "../../text/main/MainTitle";
import CloseNote from "../../cards/CloseNote";
import NavBar from "../../nav/NavBar";
import Empty from "../../../../modals/Empty";
import MainSubtitle from "../../text/main/MainSubtitle";

function ArchivedNotesScreen() {
  return (
    <div className="w-full h-screen p-4 flex flex-col justify-center items-center gap-4 overflow-hidden">
      <MainTitle text="Archived Notes" styles="text-white mb-3" subtitle="All your archived notes are stored here. You can restore or delete them anytime." subtitleStyles="text-neutral-500"/>
      <div className="w-full h-full flex flex-col overflow-y-auto">
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
        <CloseNote title="React Performance Optimization" date="16 May 2025" />
      </div>
    </div>
  );
}

export default ArchivedNotesScreen;
