import React from 'react';
import {ReactSVG} from 'react-svg';
import config from '../data/config';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer: React.SFC = () => {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <p>👋 Thanks for visiting!</p>
      <Link href="/">
        <a className={styles.logo}>
          <svg
            viewBox="0 0 300 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="50" width="50" height="50" fill="#F25F4C" />
            <rect x="200" width="50" height="50" fill="#F25F4C" />
            <rect x="50" y="100" width="50" height="50" fill="#F25F4C" />
            <rect y="50" width="50" height="50" fill="#F25F4C" />
            <rect x="150" y="50" width="50" height="50" fill="#F25F4C" />
            <rect x="250" y="75" width="50" height="50" fill="#F25F4C" />
            <rect x="200" y="100" width="50" height="50" fill="#F25F4C" />
          </svg>
        </a>
      </Link>
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
