import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../components/Button';
import { NoteContext } from '../components/NoteContext';
import { NoteItem } from '../components/NoteItem';
import '../styles/NoteList.scss';

export const NoteList = ({ setSelectedNote }) => {
  const navigate = useNavigate();
  const { notes } = useContext(NoteContext);

  const handleClick = () => {
    navigate('/../new-note');
  };

  return (
    <div className="list-box">
      <div className="list-box-row">
        <h1>Tus notas</h1>
        <Button text="+" method={ handleClick } isRounded />
      </div>
      { notes.length > 0 &&
        <ul className="note-list">
          {
            notes.map(note => <NoteItem
              note={ note }
              key={ uuidv4() }
              setSelectedNote={ setSelectedNote }
            />)
          }
        </ul>
      }
      { notes.length === 0 && <p className="alternative-text">Vaya, no tienes notas :-(</p> }
    </div>
  )
};

NoteList.propTypes = {
  selectedNote: PropTypes.object,
};
