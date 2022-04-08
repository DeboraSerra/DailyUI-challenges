import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import styles from '../styles/PopUp.module.css';

const PopUp = ({ handleClick }) => {
  return (
    <section className={styles.box}>
      <section className={styles.section}>
        <button className={styles.closeBtn} type="button" onClick={ handleClick }>
          <AiOutlineClose />
        </button>
        <h1 className={styles.title}>You are not registered yet!</h1>
        <Link className={styles.link} to="/sign-in">Register now!</Link>
      </section>
    </section>
  )
}

export default PopUp;
