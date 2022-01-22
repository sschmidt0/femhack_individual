import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { validateInput } from '../assets/validateRegisterLoginInput';
import { Button } from '../components/Button';
import '../styles/RegisterLoginPage.scss';
import '../styles/Form.scss';

export const RegisterLoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  // dynamically change texts and destinations according to the route
  // "/" --> register page
  //"/iniciar" --> login page
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

    // input validation
    const errorChecking = validateInput(data);
    if (!errorChecking.isValid) setErrors(errorChecking.errors);
    if (errorChecking.isValid) {
      // redirect to note-list according to active route
      location.pathname === 'iniciar' ? navigate('/../note-list') : navigate('/note-list');
    }
  };

  return (
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
  )
};
