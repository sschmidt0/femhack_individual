import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../components/Button';
import { NoteContext } from '../components/NoteContext';
import { NoteItem } from '../components/NoteItem';
import '../styles/NoteList.scss';

export const NoteList = () => {
  const navigate = useNavigate();
  const { notes } = useContext(NoteContext);

  const handleClick = () => {
    navigate('/../new-note');
  };

  console.log(notes);

  return (
    <div className="list-box">
      <div className="list-box-row">
        <h1>Tus notas</h1>
        <Button text="+" method={ handleClick } isRounded />
      </div>
      <ul className="note-list">
        {
          notes.map(note => <li key={ uuidv4() }>
            <NoteItem note={ note } />
          </li>)
        }
      </ul>
    </div>
  )
};
