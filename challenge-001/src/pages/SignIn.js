import React, { useState, useContext } from 'react';
import MyContext from '../context/MyContext';
import styles from '../styles/SignIn.module.css';

const SignIn = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirm, setValidConfirm] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const { saveClient } = useContext(MyContext);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'name':
      setName(value);
      break;
    case 'email':
      setEmail(value);
      validateEmail(value);
      break;
    case 'password':
      setPassword(value);
      validatePassword(value);
      break;
    case 'confirm':
      setConfirm(value);
      validateConfirm(value);
      break;
    default:
      return null;
    }
  }

  const validateEmail = (value) => {
    const isValid = value.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
    setValidEmail(isValid);
  }

  const validatePassword = (value) => {
    const isValid = value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/i);
    setValidPassword(isValid);
  }

  const validateConfirm = (value) => {
    const isValid = value === password;
    setValidConfirm(isValid);
  }

  const registerClient = (e) => {
    e.preventDefault();
    saveClient({ name, email, password });
    history.push('/');
  }

  return (
    <form className={styles.form} onSubmit={ registerClient }>
      <legend>Sign in!</legend>
      <input
        className={styles.input}
        type="name"
        name="name"
        placeholder="Name"
        value={ name }
        onChange={ handleChange }
      />
      <input
        className={ validEmail ? styles.valid : styles.invalid }
        type="email"
        name="email"
        placeholder="Email"
        value={ email }
        onChange={ handleChange }
      />
      <input
        className={ validEmail ? styles.valid : styles.invalid }
        type="password"
        name="password"
        placeholder="Password"
        value={ password }
        onChange={ handleChange }
      />
      <input
        className={ validEmail ? styles.valid : styles.invalid }
        type="password"
        name="confirm"
        placeholder="Confirm Password"
        value={ confirm }
        onChange={ handleChange }
      />
      <button
        className={styles.button}
        type="button"
        disabled={ !validEmail || !validPassword || !validConfirm }
        onClick={ registerClient }
      >
        Register
      </button>
    </form>
  )
}

export default SignIn;
