import PropTypes from 'prop-types';
import { Tag } from './Tag';
import '../styles/TagBox.scss';

export const TagBox = ({ tags, setTags, isEditable }) => (
  <ul className="tags-box">
    {
      tags.length > 0 && tags.map((tagItem, index ) => <Tag
        key={ index }
        item={ tagItem }
        tags={ tags }
        setTags={ setTags }
        isEditable={ isEditable }
      />)
    }
  </ul>
);

TagBox.propTypes = {
  tags: PropTypes.array,
  setTags: PropTypes.func,
  isEditable: PropTypes.bool
};
