import React from "react";
import Empty from "../../../../modals/Empty";
import MainTagsTitle from "../../text/main/MainTagsTitle";
import GoBackButton from "../../buttons/GoBackButton";
import MainTitle from "../../text/main/MainTitle";
import AllNotesContainer from "./AllNotesContainer";
import SearchInput from "../../inputs/SearchInput";

function SearchScreen() {
  return (
    <div className="w-full h-screen p-4 flex flex-col items-start gap-4 overflow-hidden flex-shrink-0">
      <MainTitle
        text="Search"
        styles="text-white mb-3"
        subtitleStyles="text-neutral-500"
        subtitle="All notes matching Dev are displayed below."
      />
      <SearchInput />
      <AllNotesContainer />
    </div>
  );
}

export default SearchScreen;
