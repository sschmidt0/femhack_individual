import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NoteProvider } from './components/NoteContext';
import { RegisterLoginPage } from './pages/RegisterLoginPage';
import { NoteList } from './pages/NoteList';
import { NewNote } from './pages/NewNote';
import './styles/App.scss';

export const App = () => {
  const [selectedNote, setSelectedNote] = useState('');

  return (
    <NoteProvider>
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<RegisterLoginPage />} />
              <Route path="/iniciar" element={<RegisterLoginPage />} />
              <Route path="/note-list" element={<NoteList setSelectedNote={ setSelectedNote } />} />
              <Route path="/new-note" element={<NewNote />} />
              <Route path="/edit-note" element={<NewNote selectedNote={ selectedNote } setSelectedNote={ setSelectedNote } />} />
            </Routes>
          </BrowserRouter>
        </div>
    </NoteProvider>
  );
};
