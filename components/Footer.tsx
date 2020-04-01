import React from 'react';
import styles from './Footer.module.css';

const Footer: React.SFC = () => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <p>👋 Thanks for visiting!</p>
      <p>
        Catch me outside
        <br />
        <a href="https://twitter.com/collingarvey">Twitter</a>
        {' • '}
        <a href="https://github.com/collin-garvey">GitHub</a>
        {' • '}
        <a href="https://www.linkedin.com/in/collingarvey/">LinkedIn</a>
      </p>
      <p>
        &copy; {date.getFullYear()} Collin Garvey{' • '}All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
