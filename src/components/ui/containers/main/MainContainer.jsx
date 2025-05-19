import React from 'react'
import Header from '../../header/header'
import MainScreen from './MainScreen'
import NavBar from '../../nav/NavBar'
import OpenNote from './OpenNote'
import NewNoteScreen from './NewNoteScreen'
import ArchivedNotesScreen from './ArchivesNotesScreen'
import TagsListScreen from './TagsListScreen'
import OpenTagListScreen from './OpenTagListScreen'
import SearchScreen from './SearchScreen'
import SettingsScreen from './SettingsScreen'
import SettingsOptionOpenScreen from './SettingsOptionOpenScreen'
import ChangePasswordScreen from './ChangePasswordScreen'

function MainContainer() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-neutral-950 rounded-2xl'>
        <MainScreen/>
        {/* <NewNoteScreen/> */}
        {/* <OpenNote/> */}
        {/* <ArchivedNotesScreen/> */}
        {/* <TagsListScreen/> */}
        {/* <OpenTagListScreen/> */}
        {/* <SearchScreen/> */}
        {/* <SettingsScreen/> */}
        {/* <SettingsOptionOpenScreen/> */}
        {/* <ChangePasswordScreen/> */}
    </div>
  )
}

export default MainContainer