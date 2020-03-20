import Link from 'next/link';
import Head from 'next/head';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <>
      <Head>
        <title>Collin Garvey</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Alegreya+Sans:400,400i,700|Alegreya:400,400i,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container container--grid">
        <div className="container__row">
          <h1>Collin Garvey</h1>
          <h2>Front-end Engineer</h2>
          <nav>
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
        </div>
      </div>
    </>
  );
};

export default Header;
