import React from "react";
import Empty from "../../../../modals/Empty";
import MainTagsTitle from "../../text/main/MainTagsTitle";
import GoBackButton from "../../buttons/GoBackButton";
import MainTitle from "../../text/main/MainTitle";
import AllNotesContainer from "./AllNotesContainer";
import Header from "../../header/header";
import NavBar from "../../nav/NavBar";

function OpenTagListScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen p-4 flex flex-col justify-center items-start gap-4 overflow-hidden rounded-2xl bg-neutral-950">
        <GoBackButton text="All Tags" styles="" />
        <MainTitle
          text="Notes Tagged:"
          styles="text-neutral-400 mb-3"
          subtitleStyles="text-neutral-500"
          tag="Dev"
          subtitle="All notes with Dev tag are shown here."
        />
        <AllNotesContainer />
      </div>
      <NavBar />
    </div>
  );
}

export default OpenTagListScreen;
