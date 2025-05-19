import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Main App Screens
import MainScreen from "./components/ui/containers/main/MainScreen";
import SettingsScreen from "./components/ui/containers/main/SettingsScreen";
import SettingsOptionThemeOpenScreen from "./components/ui/containers/main/SettingsOptionThemeOpenScreen";
import SettingsOptionFontOpenScreen from "./components/ui/containers/main/SettingsOptionFontOpenScreen";
import SearchScreen from "./components/ui/containers/main/SearchScreen";
import ArchivedNotesScreen from "./components/ui/containers/main/ArchivesNotesScreen";
import ChangePasswordScreen from "./components/ui/containers/main/ChangePasswordScreen";
import OpenNoteScreen from "./components/ui/containers/main/OpenNoteScreen";
import OpenTagListScreen from "./components/ui/containers/main/OpenTagListScreen";
import TagsListScreen from "./components/ui/containers/main/TagsListScreen";
import NewNoteScreen from "./components/ui/containers/main/NewNoteScreen";

//Error Screens
import NotFoundScreen from "./components/ui/screens/NotFoundScreen";

//Auth Screens
import LoginScreen from "./components/ui/containers/auth/loginScreen";
import SignUpScreen from "./components/ui/containers/auth/SignUpScreen";
import ForgotPasswordScreen from "./components/ui/containers/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/ui/containers/auth/ResetPasswordScreen";

//General Imports
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
    errorElement: <NotFoundScreen />,
  },
  {
    path: "/search",
    element: <SearchScreen />,
  },
  {
    path: "/archived",
    element: <ArchivedNotesScreen />,
  },
  {
    path: "/tags",
    element: <TagsListScreen />,
  },
  {
    path: "/opennote",
    element: <OpenNoteScreen />,
  },
  {
    path: "/opentag",
    element: <OpenTagListScreen />,
  },
  {
    path: "/newnote",
    element: <NewNoteScreen />,
  },
  {
    path: "/settings",
    element: <SettingsScreen />,
  },
  {
    path: "/settings/:theme",
    element: <SettingsOptionThemeOpenScreen />,
  },
  {
    path: "/settings/:font",
    element: <SettingsOptionFontOpenScreen />,
  },
  {
    path: "/changepassword",
    element: <ChangePasswordScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/signup",
    element: <SignUpScreen />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPasswordScreen />,
  },
  {
    path: "/resetpassword",
    element: <ResetPasswordScreen />,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
