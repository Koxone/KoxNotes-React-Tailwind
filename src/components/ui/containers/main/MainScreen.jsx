import React from "react";
import MainTitle from "../../text/main/MainTitle";
import CloseNote from "../../cards/CloseNote";
import NavBar from "../../nav/NavBar";
import Empty from "../../../../modals/Empty";
import AllNotesContainer from "./AllNotesContainer";

function MainScreen() {
  return (
    <div className="w-full h-screen p-4 flex flex-col justify-center items-center overflow-hidden">
      <MainTitle text="All Notes" styles="text-white mb-4" />
      <AllNotesContainer/>
    </div>
  );
}

export default MainScreen;
