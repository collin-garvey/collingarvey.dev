import React from 'react';
import Link from 'next/link';

import styles from './Navigation.module.css';

const Navigation: React.SFC = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/">
        <a>Work</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navigation;
