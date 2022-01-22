import { useContext } from 'react';
import { NoteContext } from '../components/NoteContext';
import { Button } from './Button';
import { MdEdit, MdDelete } from 'react-icons/md';
import { TagBox } from './TagBox';
import '../styles/NoteItem.scss';

export const NoteItem = ({ note }) => {
  const { notes, setNotes } = useContext(NoteContext);

  const handleEdit = () => {
    console.log('editing');
  };

  const handleDelete = () => {
    const newNotes = notes.filter(oldNote => oldNote.id !== note.id);
    setNotes(newNotes);
  };

  return (
    <li className="note-box">
      <div className="note-box-head">
        <TagBox tags={ note.tags } />
        <h3>{ note.title }</h3>
      </div>
      <div className="note-box-row">
        <p>{ note.description }</p>
        <div className="button-container">
          <Button text={ <MdEdit /> } method={ handleEdit } isRounded />
          <Button text={ <MdDelete /> } method={ handleDelete } isRounded />
        </div>
      </div>
    </li>
  );
};
