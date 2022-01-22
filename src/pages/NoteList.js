import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { NoteContext } from '../components/NoteContext';

export const NoteList = () => {
  const navigate = useNavigate();
  const { notes } = useContext(NoteContext);

  const handleClick = () => {
    navigate('/../new-note');
  };

  console.log(notes);

  return (
    <div className="list">
      <Button text="+" method={ handleClick } isRounded />
      <h1>Note List</h1>
    </div>
  )
};
