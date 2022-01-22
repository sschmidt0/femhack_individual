import '../styles/Button.scss';

export const Button = ({ text, method, isRounded }) => (
  <button onClick={ method } className={ `${isRounded ? 'rounded' : 'form-button' }` }>{ text }</button>
);
