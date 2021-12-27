import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
    return (
        <div className='note'>
            <span>Hello, Im a note</span>
            <div className='note-footer'>
                <small>12/09/2021</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    )
}

export default Note
