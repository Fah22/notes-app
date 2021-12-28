import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({ notes, handleNewNote, handleDeleteNote }) => {
    return (
        <div className='notes-list'>
        {notes.map((note) =>
            <Note id={note.id} note={note.note} date={note.date} handleDeleteNote={handleDeleteNote}/>
         )}
        <AddNote handleNewNote={handleNewNote} /> 
        </div>
    )
}

export default NotesList
