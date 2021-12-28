import { useEffect, useState } from 'react'
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';

const App = () => {
  const [notes, setNotes] = useState([
      {
        id: nanoid(),
        note: 'Journaling session 3pm-4pm',
        date: "15/03/2021"
      },
      {
        id: nanoid(),
        note: 'Pilates session w/ Mo tomorrow @10am',
        date: "16/03/2021"
      },
      {
        id: nanoid(),
        note: 'Grocery shopping',
        date: "20/03/2021"
      },
  ]); 
  
  const [searchValue, setSearchValue] = useState('');

  // to retrieve items already stored in local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'))

    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  // to save notes to local Storage
  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes))
  }, [notes])

  // create a function in parent component so that AddNote.js can update the state of the new note added
  const addNote = (note) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      note: note,
      date: date.toLocaleDateString()
    }

    const newNotesList = [...notes, newNote];
    setNotes(newNotesList);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }


  return (
    <>
      <div className='notes-container'>
          <header className='heading'>Notes Application</header>
          <Search handleSearch={setSearchValue}/>
          <NotesList 
              notes={notes.filter((note) => note.note.toLowerCase().includes(searchValue))} 
              handleNewNote={addNote} 
              handleDeleteNote={deleteNote}
              />
      </div>
    </>
  );
}

export default App;
