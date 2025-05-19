import React from "react";
import MainButton from "../../buttons/mainButton";
import MailInput from "../../inputs/mailInput";
import TitleAuth from "../../text/auth/title";
import SubtitleAuth from "../../text/auth/subtitle";
import PasswordInput from "../../inputs/passwordInput";
import MainLogo from "../../logo/MainLogo";
import SocialButton from "../../buttons/SocialButton";

function LoginScreen({ className = "" }) {
  return (
    <div
      className={`${className} bg-neutral-950 w-full h-full rounded-2xl py-12 px-4 flex flex-col justify-center items-center gap-4`}
    >
      <MainLogo className="" />
      <TitleAuth text="Welcome to KoxNotes" />
      <SubtitleAuth text="Please login to continue" />
      <MailInput className="" text="Email Address" />
      <PasswordInput 
      text="Password"
      forgot="Forgot"
      className="w-full" />
      <MainButton
        text="Login"
        className=""
        styles="w-full"
      />
      <SocialButton>
        No account yet?{" "}
        <a href="/signup" className="text-blue-400">
          Sign Up
        </a>
      </SocialButton>
    </div>
  );
}

export default LoginScreen;
