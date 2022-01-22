import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { validateInput } from '../assets/validateNoteInput';
import { Button } from '../components/Button';
import { NoteContext } from '../components/NoteContext';
import { TagBox } from '../components/TagBox';
import { IoIosArrowBack } from 'react-icons/io';
import '../styles/NewNote.scss';

export const NewNote = ({ selectedNote }) => {
  const navigate = useNavigate();
  const { notes, setNotes } = useContext(NoteContext);
  const [title, setTitle] = useState(selectedNote !== undefined ? selectedNote.title : '');
  const [description, setDescription] = useState(selectedNote !== undefined ? selectedNote.description : '');
  const [tagInput, setTagInput] = useState({ text: '', id: '' });
  const [tags, setTags] = useState(selectedNote !== undefined ? selectedNote.tags : []);
  const tagsInfoText = tags.length === 1 ? 'tag' : 'tags';
  const id = selectedNote !== undefined ? selectedNote.id : uuidv4();
  const [errors, setErrors] = useState({});

  const handleBack = () => {
    navigate(-1);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setTags([...tags, tagInput]);
    setTagInput({ text: '', id: '' });
  };

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
      if (selectedNote === undefined) {
        // save note in context store if new note
        setNotes([...notes, data]);
      } else {
        // if note is edited, we have to find position of edited note in notes array and replace it
        const index = notes.findIndex(note => note.id === id);
        setNotes([...notes.slice(0, index), data, ...notes.slice(index+1)]);
      }

      // redirect to note-list
      navigate('/../note-list');
    }
  };

  return (
    <div className="form-container">
      <Button
        text={ <IoIosArrowBack /> }
        method={ handleBack }
        isRounded
        className="back-icon"
      />
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

        {/* tags added */}
        <p className="tag-info">{ tags.length } { tagsInfoText } added</p>
        <TagBox
          tags={ tags }
          setTags={ setTags }
          isEditable
        />

        {/* tags */}
        <label html="tags">Tag</label>
        <div className="tag-input-box">
          <input
            id="tags"
            name="tags"
            autoFocus
            value={ tagInput.text }
            onChange={(e) => setTagInput({
              text: e.target.value,
              id: uuidv4()
            })}
          />
          <Button text="+" method={ handleAdd } isRounded />
        </div>
        <Button text="Guardar nota" method={ handleClick } />
      </form>
    </div>
  )
};

NewNote.propTypes = {
  selectedNote: PropTypes.object,
};
