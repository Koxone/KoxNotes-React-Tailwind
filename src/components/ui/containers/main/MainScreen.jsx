import React from "react";
import MainTitle from "../../text/main/MainTitle";
import NavBar from "../../nav/NavBar";
import Empty from "../../../../modals/Empty";
import AllNotesContainer from "./AllNotesContainer";
import Header from "../../header/Header";
import NewNoteButton from "../../buttons/NewNoteButton";

function MainScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen p-4 flex flex-col justify-center items-center overflow-hidden bg-neutral-950 rounded-2xl">
        <MainTitle text="All Notes" styles="text-white mb-4" />
        <AllNotesContainer />
        <NewNoteButton icon="plus" mode="darkMode" />
      </div>
      <NavBar />
    </div>
  );
}

export default MainScreen;
