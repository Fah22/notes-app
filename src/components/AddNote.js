import React, { useState } from 'react'

const AddNote = ({ handleNewNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleNoteChange = (e) => {
        if(characterLimit - e.target.value.length >= 0) {
             setNoteText(e.target.value)
        }
    }

    const newNote = () => {
        if(noteText.trim().length > 0) {
            handleNewNote(noteText);
            setNoteText('');
        }
        
    }

    return (
        <div className="new-note">
            <textarea 
                rows="8" 
                cols="10"
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleNoteChange}>
            </textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save-note' onClick={newNote}>Add Note</button>
            </div>
        </div>
    )
}

export default AddNote
