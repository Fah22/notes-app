import React from 'react'

const AddNote = () => {
    return (
        <div className="new-note">
            <textarea 
                rows="8" 
                cols="10"
                placeholder="Type to add a note...">
            </textarea>
            <div className='note-footer'>
                <small>200 Remaining</small>
                <button className='save-note'>Add Note</button>
            </div>
        </div>
    )
}

export default AddNote
