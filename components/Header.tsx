import Head from 'next/head';
import Link from 'next/link';
import Navigation from './Navigation';
import styles from './Header.module.css';
import config from '../data/config.json';

const Header: React.SFC = () => {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`${config.description}`} />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.Header}>
        <div className={styles.headerContent}>
          <div className={styles.masthead}>
            <Link href="/">
              <a>{'CG'}</a>
            </Link>
          </div>
          <Navigation />
        </div>
      </header>
    </>
  );
};

export default Header;
