import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import PopUp from "../components/PopUp";
import MyContext from "../context/MyContext";
import styles from '../styles/Login.module.css';

const Login = ({ history }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [validFields, setValidFields] = useState(false);
  const { clients } = useContext(MyContext);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'login':
      setLogin(value);
      validateFields();
      break;
    case 'password':
      setPassword(value);
      validateFields();
      break;
    default:
      return validFields();
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    const correctLogin = clients.find(({ email }) => email === login);
    const correctPassword = correctLogin && correctLogin.password === password;
    if (correctLogin && correctPassword) {
      history.push(`/dashboard/${correctLogin.name}`);
    } else togglePopUp();
  }

  const validateFields = () => {
    const correctEmail = login.match(/^[a-zA-Z0-1]+@+[a-z0-1]+\.[a-z{3}]/i);
    const correctPassword = password.match(/[a-z{2}A-Z{2}0-9{2}\W{2}]/i) && password.length >= 6;
    setValidFields(correctEmail && correctPassword);
  }

  const togglePopUp = () => {
    if (isOpen) setIsOpen(false);
    else if (!clients.some(({ email }) => email === login)) setIsOpen(true);
  }

  return (
    <div className={styles.parent}>
      <form className={styles.form} onSubmit={ handleClick }>
        <legend>Log in!</legend>
        <input
          className={styles.input}
          type="email"
          name="login"
          placeholder="Login"
          value={ login }
          onChange={ handleChange }
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={ password }
          onChange={ handleChange }
        />
        <section className={styles['remember-sect']}>
          <label className={styles.label} htmlFor="remember">
            <input type="checkbox" id="remember" />
            <span className={styles.checkbox}></span>
            Remember me
          </label>
          <Link className={styles.link} to="/sign-in">Not registered? Sign in!</Link>
        </section>
        <button
          className={styles.btn__login}
          type="submit"
          onClick={ handleClick }
        >
          Log in
        </button>
      </form>
      { isOpen && <PopUp handleClick={ togglePopUp } />}
    </div>
  );
}

export default Login;
