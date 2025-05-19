import React from 'react'
import OpenNoteHeader from '../../header/OpenNoteHeader'
import MainTitle from '../../text/main/MainTitle'
import OpenNoteInfoCard from '../../cards/OpenNoteInfoCard'
import NoteTextArea from '../../inputs/NoteTextArea'

function OpenNote() {
  return (
    <div className='w-full h-screen pr-4 pl-4 pb-4 flex flex-col justify-center items-center gap-4'>
        <OpenNoteHeader />
        <MainTitle text='React Performance Optimization' styles='text-white'/>
        <OpenNoteInfoCard 
        icon='tag' 
        mode='darkMode'
        date='16 May 2025'
        tags1='Dev'
        tag2='React'
        text1='Tags'
        text2='Last Edited'/>
        <NoteTextArea/>
    </div>
  )
}

export default OpenNote