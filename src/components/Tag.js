import { Button } from './Button';
import '../styles/Tag.scss';

export const Tag = ({ item, tags, setTags, isEditable }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log('tag delete');
    const newTags = tags.filter(tagItem => tagItem.id !== item.id);
    setTags(newTags);
  };

  return (
    <li className="tag-span">
      <span>{ item.text }</span>
      { isEditable && <Button text="x" method={ handleDelete } isRounded /> }
    </li>
  );
};
