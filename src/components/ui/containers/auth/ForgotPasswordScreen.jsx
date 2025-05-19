import React from "react";
import MainButton from "../../buttons/mainButton";
import MailInput from "../../inputs/mailInput";
import TitleAuth from "../../text/auth/title";
import SubtitleAuth from "../../text/auth/subtitle";
import PasswordInput from "../../inputs/passwordInput";
import MainLogo from "../../logo/MainLogo";
import SocialButton from "../../buttons/SocialButton";
import Header from "../../header/Header";
import NavBar from "../../nav/NavBar";

import { useNavigate } from "react-router-dom";

function ForgotPasswordScreen({ className = "" }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div
        className={`${className} bg-neutral-950 w-full h-screen rounded-2xl py-12 px-4 flex flex-col items-center gap-4 overflow-hidden`}
      >
        <MainLogo className="" />
        <TitleAuth text="Forgotten your password?" />
        <SubtitleAuth text="Enter your email below, and we’ll send you a link to reset it." />
        <MailInput className="" text="Email Address" />
        <MainButton text="Send Reset Link" styles="w-full" />
      </div>
      <NavBar />
    </div>
  );
}

export default ForgotPasswordScreen;
