import React from "react";
import MainButton from "../../buttons/mainButton";
import MailInput from "../../inputs/mailInput";
import TitleAuth from "../../text/auth/title";
import SubtitleAuth from "../../text/auth/subtitle";
import PasswordInput from "../../inputs/passwordInput";
import MainLogo from "../../logo/MainLogo";
import SocialButton from "../../buttons/SocialButton";

function SignUpScreen({ className = "" }) {
  return (
    <div
      className={`${className} bg-neutral-950 w-full h-full rounded-2xl py-12 px-4 flex flex-col justify-center items-center gap-4`}
    >
      <MainLogo className="" />
      <TitleAuth text="Create Your Account" />
      <SubtitleAuth text="Sign up to start organizing your notes and boost your productivity." />
      <MailInput className="" text="Email Address" />
      <PasswordInput 
      text="Password"
      className="w-full"
      atLeast="At least 8 characters" />
      <MainButton
        text="Sign Up"
        className="bg-blue-500 hover:bg-blue-700 text-white font-[Inter] text-[16px] py-[12.5px] px-[134.5px] whitespace-nowrap rounded-[8px] cursor-pointer"
        styles="w-full"
      />
      <SocialButton>
        Already have an account?{" "}
        <a href="/login" className="text-blue-400">
          Login
        </a>
      </SocialButton>
    </div>
  );
}

export default SignUpScreen;
