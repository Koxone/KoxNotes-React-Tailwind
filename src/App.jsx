import React from 'react'
import LoginScreen from './components/ui/containers/auth/loginScreen'
import SignUpScreen from './components/ui/containers/auth/SignUpScreen'
import ForgotPasswordScreen from './components/ui/containers/auth/ForgotPasswordScreen'
import ResetPasswordScreen from './components/ui/containers/auth/ResetPasswordScreen'
import MainContainer from './components/ui/containers/main/MainContainer'
import Header from './components/ui/header/header'
import NavBar from './components/ui/nav/NavBar'

export default function App() {
  return (
    <div className='w-full h-full flex flex-col justify-between items-center bg-neutral-800 min-h-screen relative'>
      <Header/>
      <MainContainer/>
      <NavBar/>
    </div>
  )
}
