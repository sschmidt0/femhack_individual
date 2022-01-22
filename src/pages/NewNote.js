import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { validateInput } from '../assets/validateNoteInput';
import { Button } from '../components/Button';
import { NoteContext } from '../components/NoteContext';

export const NewNote = () => {
  const navigate = useNavigate();
  const { notes, setNotes } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const id = uuidv4();
  const [errors, setErrors] = useState({});

  const handleClick = (e) => {
    e.preventDefault();

    const data = {
      id,
      title,
      description,
      tags
    };

    // input validation
    const errorChecking = validateInput(data);
    if (!errorChecking.isValid) setErrors(errorChecking.errors);
    if (errorChecking.isValid) {
      // save note in context store
      setNotes([...notes, data]);
      // redirect to note-list
      navigate('/../note-list');
    }
  };

  return (
    <div className="form-container">
      <form noValidate autoComplete="off">
        {/* title */}
        <label html="title">Título</label>
        <input
          id="title"
          name="title"
          autoFocus
          value={ title }
          onChange={(e) => setTitle(e.target.value)}
        />
        <span>{ errors.title }</span>
        {/* description */}
        <label html="description">Descripción</label>
        <textarea
          value={ description }
          onChange={(e) => setDescription(e.target.value)}
        />
        <span>{ errors.description }</span>
        {/* tags */}
        <label html="tags">Tags</label>
        <input
          id="tags"
          name="tags"
          autoFocus
          value={ tags }
          onChange={(e) => setTags(e.target.value)}
        />
        <Button text="Guardar nota" method={ handleClick } />
      </form>
    </div>
  )
};

