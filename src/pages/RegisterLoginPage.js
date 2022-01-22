import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../styles/RegisterLoginPage.scss';
import { validateInput } from '../assets/validateInput';
import { Button } from '../components/Button';

export const RegisterLoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const buttonText = location.pathname !== '/iniciar' ? 'Regístrate' : 'Inicia la sesión';
  const preText = location.pathname === '/iniciar' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?';
  const linkDestination = location.pathname === '/iniciar' ? '/' : '/iniciar';
  const linkText = location.pathname === '/iniciar' ? 'Regístrate' : 'Inicia la sesión';

  const handleClick = (e) => {
    e.preventDefault();

    const data = {
      userName,
      email
    };

    const errorChecking = validateInput(data);
    if (!errorChecking.isValid) setErrors(errorChecking.errors);
    if (errorChecking.isValid) {
      console.log('Login sucessful');
      location.pathname === 'iniciar' ? navigate('/../note-list') : navigate('/note-list');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form noValidate autoComplete="off">
          {/* username */}
          <label html="username">Nombre de usuario</label>
          <input
            id="username"
            name="username"
            autoFocus
            value={ userName }
            onChange={(e) => setUserName(e.target.value)}
          />
          <span>{ errors.userName }</span>
          {/* email */}
          <label html="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            inputMode='email'
            value={ email }
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>{ errors.email }</span>
          <Button text={ buttonText } method={ handleClick } />
        </form>
        <p>{ preText } <Link to={ linkDestination }>{ linkText }</Link></p>
      </div>
    </div>
  )
};