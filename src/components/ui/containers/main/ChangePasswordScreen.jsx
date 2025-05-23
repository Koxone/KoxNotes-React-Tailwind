import React from "react";
import MainTitle from "../../text/main/MainTitle";
import GoBackButton from "../../buttons/GoBackButton";
import GeneralPasswordInput from "../../inputs/GeneralPasswordInput";
import MainButton from "../../buttons/mainButton";
import InputMessage from "../../text/general/InputMessage";
import Header from "../../header/Header";
import NavBar from "../../nav/NavBar";

function ChangePasswordScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen py-6 px-4 flex flex-col gap-3.5 rounded-2xl bg-neutral-950">
        <GoBackButton />
        <div className="flex flex-col gap-6">
          <MainTitle text="Change Password" styles="text-white" />
          <GeneralPasswordInput text="Old Password" className="w-full" />
          <GeneralPasswordInput text="New Password" className="w-full" atLeast="At least 8 characters" />
          <InputMessage atLeast="At least 8 characters" />
          <GeneralPasswordInput text="Confirm New Password" className="w-full" />
          <MainButton text="Save Password" styles="w-[132px] self-end" />
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default ChangePasswordScreen;
