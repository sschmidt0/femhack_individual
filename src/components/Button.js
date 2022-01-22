import PropTypes from 'prop-types';
import '../styles/Button.scss';

export const Button = ({ text, method, isRounded }) => (
  <button onClick={ method } className={ `${isRounded ? 'rounded' : 'form-button' }` }>{ text }</button>
);

Button.propTypes = {
  text: PropTypes.string,
  method: PropTypes.func,
  isRounded: PropTypes.bool
};
