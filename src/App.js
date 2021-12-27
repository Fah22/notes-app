import { useState } from 'react'
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState({});
  return (
    <>
      <div className='notes-container'>
          <NotesList />
      </div>
    </>
  );
}

export default App;
