import React from "react";
import MainTitle from "../../text/main/MainTitle";
import SettingsCard from "../../cards/SettingsCard";

function SettingsScreen() {
  return (
    <div className="w-full h-screen py-6 px-4">
      <MainTitle text="Settings" styles="text-white" />
      <div className="flex flex-col items-start justify-start gap-4 mt-4 w-full">
        <SettingsCard text="Color Theme" styles="text-white" icon="sun" mode="darkMode" />
        <SettingsCard text="Color Theme" styles="text-white" icon="font" mode="darkMode" />
        <SettingsCard text="Color Theme" styles="text-white" icon="lock" mode="darkMode" />
        <hr className="w-full border-t border-neutral-700 my-4" />

        <SettingsCard text="Logout" styles="text-white" icon="logout" mode="darkMode" />
      </div>
    </div>
  );
}

export default SettingsScreen;
