import * as React from 'react'
import NotesList from './components/NotesList';

const App = () => {
  return (
    <>
      <div className='notes-container'>
          <NotesList />
      </div>
    </>
  );
}

export default App;
