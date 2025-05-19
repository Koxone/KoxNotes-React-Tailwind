import React from "react";
import GoBackButton from "../../buttons/GoBackButton";
import MainTitle from "../../text/main/MainTitle";
import SettingsOptionCard from "../../cards/SettingsOptionCard";
import MainButton from "../../buttons/mainButton";
import Header from "../../header/Header";
import NavBar from "../../nav/NavBar";

function SettingsOptionThemeOpenScreen({  }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="flex flex-col gap-4 h-screen py-6 px-4 rounded-2xl bg-neutral-950">
        <GoBackButton text="Settings" />
        <MainTitle text="Color Theme" styles="text-neutral-50 font-bold text-2xl mt-4 mb-4" subtitle="Choose your color theme:" subtitleStyles="text-white" />
        <SettingsOptionCard
          icon="sun"
          mode="darkMode"
          title="Light Mode"
          subtitle="Pick a clean and classic light theme"
          styleInside=""
        />
        <SettingsOptionCard
          icon="moon"
          mode="darkMode"
          title="Dark Mode"
          subtitle="Select a sleek and modern dark theme"
          styleInside=""
        />
        <SettingsOptionCard
          icon="system-theme"
          mode="darkMode"
          title="System"
          subtitle="Select the same theme as your system"
          styleInside=""
        />
        <MainButton text="Apply Changes" styles="w-[132px] self-end mt-[8px]" />
      </div>
      <NavBar />
    </div>
  );
}

export default SettingsOptionThemeOpenScreen;
