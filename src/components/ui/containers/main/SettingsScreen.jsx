import React from "react";
import MainTitle from "../../text/main/MainTitle";
import SettingsCard from "../../cards/SettingsCard";
import NavBar from "../../nav/NavBar";
import Header from "../../header/header";

function SettingsScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen py-6 px-4 rounded-2xl bg-neutral-950">
        <MainTitle text="Settings" styles="text-white" />
        <div className="flex flex-col items-start justify-start gap-4 mt-4 w-full">
          <SettingsCard text="Color Theme" styles="text-white" icon="sun" mode="darkMode" param="theme" />
          <SettingsCard text="Font Theme" styles="text-white" icon="font" mode="darkMode" param="font" />
          <SettingsCard text="Change Password" styles="text-white" icon="lock" mode="darkMode" param="change" />
          <hr className="w-full border-t border-neutral-700 my-4" />
          <SettingsCard text="Logout" styles="text-white" icon="logout" mode="darkMode" param="logout" />
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default SettingsScreen;
