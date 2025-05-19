import React from "react";
import Empty from "../../../../modals/Empty";
import MainTagsTitle from "../../text/main/MainTagsTitle";
import GoBackButton from "../../buttons/GoBackButton";
import MainTitle from "../../text/main/MainTitle";
import AllNotesContainer from "./AllNotesContainer";
import SearchInput from "../../inputs/SearchInput";
import NavBar from "../../nav/NavBar";
import Header from "../../header/Header";

function SearchScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen p-4 flex flex-col items-start gap-4 overflow-hidden flex-shrink-0 rounded-2xl bg-neutral-950">
        <MainTitle
          text="Search"
          styles="text-white mb-3"
          subtitleStyles="text-neutral-500"
          subtitle="All notes matching Dev are displayed below."
        />
        <SearchInput />
        <AllNotesContainer />
      </div>
      <NavBar />
    </div>
  );
}

export default SearchScreen;
