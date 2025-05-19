import React from "react";
import MainContainer from "./components/ui/containers/main/MainContainer";
import Header from "./components/ui/header/header";
import NavBar from "./components/ui/nav/NavBar";

// Main App Screens
import MainScreen from "./components/ui/containers/main/MainScreen";
import SettingsScreen from "./components/ui/containers/main/SettingsScreen";
import NewNoteScreen from "./components/ui/containers/main/NewNoteScreen";
import OpenNoteScreen from "./components/ui/containers/main/OpenNoteScreen";
import ArchivedNotesScreen from "./components/ui/containers/main/ArchivesNotesScreen";
import TagsListScreen from "./components/ui/containers/main/TagsListScreen";
import OpenTagListScreen from "./components/ui/containers/main/OpenTagListScreen";
import SearchScreen from "./components/ui/containers/main/SearchScreen";
import SettingsOptionThemeOpenScreen from "./components/ui/containers/main/SettingsOptionThemeOpenScreen";
import SettingsOptionFontOpenScreen from "./components/ui/containers/main/SettingsOptionFontOpenScreen";
import ChangePasswordScreen from "./components/ui/containers/main/ChangePasswordScreen";

//Auth Screens
import ForgotPasswordScreen from "./components/ui/containers/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/ui/containers/auth/ResetPasswordScreen";
import LoginScreen from "./components/ui/containers/auth/loginScreen";
import SignUpScreen from "./components/ui/containers/auth/SignUpScreen";

//Error Screens
import NotFoundScreen from "./components/ui/screens/NotFoundScreen";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center bg-neutral-800 min-h-screen relative">
      {/* <MainScreen /> */}
      {/* <NewNoteScreen/> */}
      {/* <OpenNoteScreen/> */}
      {/* <ArchivedNotesScreen/> */}
      {/* <TagsListScreen/> */}
      {/* <OpenTagListScreen/> */}
      {/* <SearchScreen/> */}
      {/* <SettingsScreen /> */}
      {/* <SettingsOptionThemeOpenScreen/> */}
      {/* <SettingsOptionFontOpenScreen /> */}
      {/* <ChangePasswordScreen/> */}

      {/* <ForgotPasswordScreen/> */}
      {/* <ResetPasswordScreen/> */}
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <NotFoundScreen/> */}
    </div>
  );
}
