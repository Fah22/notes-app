import { useState } from 'react'
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';

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
  ]); // each note is placed in an array holding info regarding the note details, date and 


  return (
    <>
      <div className='notes-container'>
          <NotesList notes={notes}/>
      </div>
    </>
  );
}

export default App;
