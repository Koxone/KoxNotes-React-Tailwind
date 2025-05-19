import React from "react";
import GoBackButton from "../../buttons/GoBackButton";
import MainTitle from "../../text/main/MainTitle";
import SettingsOptionCard from "../../cards/SettingsOptionCard";
import MainButton from "../../buttons/mainButton";
import Header from "../../header/header";
import NavBar from "../../nav/NavBar";

function SettingsOptionFontOpenScreen({
  title = "",
  subtitle = "",
  icon1 = "",
  icon2 = "",
  icon3 = "",
  text1 = "",
  text2 = "",
  text3 = "",
  styles = "",
}) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="flex flex-col gap-4 h-screen py-6 px-4 rounded-2xl bg-neutral-950">
        <GoBackButton text="Settings" />
        <MainTitle text={title} styles="text-neutral-50 font-bold text-2xl mt-4 mb-4" subtitle={subtitle} />
        <SettingsOptionCard
          icon="font-sans-serif"
          mode="darkMode"
          title="Sans-Serif"
          subtitle="Clean and modern, easy to read"
          styleInside=""
        />
        <SettingsOptionCard
          icon="font-serif"
          mode="darkMode"
          title="Serif"
          subtitle="Classic and elegant for a timeless feel."
          styleInside=""
        />
        <SettingsOptionCard
          icon="font-monospace"
          mode="darkMode"
          title="Monospace"
          subtitle="Code like, great for a technical vibe."
          styleInside=""
        />
        <MainButton text="Apply Changes" styles="w-[132px] self-end mt-[8px]" />
      </div>
      <NavBar />
    </div>
  );
}

export default SettingsOptionFontOpenScreen;
