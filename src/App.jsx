import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./components/ui/containers/auth/loginScreen";
import SignUpScreen from "./components/ui/containers/auth/SignUpScreen";
import ForgotPasswordScreen from "./components/ui/containers/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/ui/containers/auth/ResetPasswordScreen";

import MainContainer from "./components/ui/containers/main/MainContainer";
import AllNotesContainer from "./components/ui/containers/main/AllNotesContainer";
import ArchivedNotesScreen from "./components/ui/containers/main/ArchivesNotesScreen";
import NewNoteScreen from "./components/ui/containers/main/NewNoteScreen";
import OpenNote from "./components/ui/containers/main/OpenNote";
import TagsListScreen from "./components/ui/containers/main/TagsListScreen";
import OpenTagListScreen from "./components/ui/containers/main/OpenTagListScreen";
import SearchScreen from "./components/ui/containers/main/SearchScreen";
import SettingsScreen from "./components/ui/containers/main/SettingsScreen";
import SettingsOptionOpenScreen from "./components/ui/containers/main/SettingsOptionOpenScreen";
import ChangePasswordScreen from "./components/ui/containers/main/ChangePasswordScreen";
import MainScreen from "./components/ui/containers/main/MainScreen";

import Header from "./components/ui/header/header";
import NavBar from "./components/ui/nav/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full flex flex-col justify-between items-center bg-neutral-800 min-h-screen relative">
        <Header />
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
          <Route path="/reset-password" element={<ResetPasswordScreen />} />

          {/* Main Routes */}
          <Route path="/" element={<MainContainer />} />
          <Route path="/new-note" element={<NewNoteScreen />} />
          <Route path="/note/:id" element={<OpenNote />} />
          <Route path="/archived" element={<ArchivedNotesScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/change-password" element={<ChangePasswordScreen />} />
          <Route path="/settings/:option" element={<SettingsOptionOpenScreen />} />
          <Route path="/tag/:id" element={<OpenTagListScreen />} />
          <Route path="/tags" element={<TagsListScreen />} />
        </Routes>
        <NavBar />
      </div>
    </BrowserRouter>
  );
}
