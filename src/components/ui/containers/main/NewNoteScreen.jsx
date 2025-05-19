import React from "react";
import OpenNoteHeader from "../../header/OpenNoteHeader";
import NewNoteInfoCard from "../../cards/NewNoteInfoCard";
import NoteTextArea from "../../inputs/NoteTextArea";
import Header from "../../header/header";
import NavBar from "../../nav/NavBar";

function NewNoteScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="pr-4 pl-4 pb-4 w-full h-screen flex flex-col rounded-2xl bg-neutral-950">
        <OpenNoteHeader />
        <input
          className="placeholder:text-white placeholder:text-2xl mt-4 text-2xl text-white outline-0"
          type="text"
          placeholder="Enter a title..."
        />
        <NewNoteInfoCard mode="darkMode" />
        <NoteTextArea />
      </div>
      <NavBar />
    </div>
  );
}

export default NewNoteScreen;
