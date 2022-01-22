import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NoteProvider } from './components/NoteContext';
import { RegisterLoginPage } from './pages/RegisterLoginPage';
import { NoteList } from './pages/NoteList';
import { NewNote } from './pages/NewNote';
import './styles/App.scss';

export const App = () => {
  return (
    <NoteProvider>
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<RegisterLoginPage />} />
              <Route path="/iniciar" element={<RegisterLoginPage />} />
              <Route path="/note-list" element={<NoteList />} />
              <Route path="/new-note" element={<NewNote />} />
            </Routes>
          </BrowserRouter>
        </div>
    </NoteProvider>
  );
};
