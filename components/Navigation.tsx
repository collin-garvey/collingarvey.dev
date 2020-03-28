import React from 'react';
import Link from 'next/link';

import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Blog</a>
      </Link>
      <Link href="/">
        <a>Work</a>
      </Link>
      <Link href="/about">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navigation;
