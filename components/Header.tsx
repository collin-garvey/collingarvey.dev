import Head from 'next/head';
import Link from 'next/link';
import Grid from './Grid';
import Navigation from './Navigation';
import styles from './Header.module.css';

const Header: React.SFC = () => {
  return (
    <>
      <Head>
        <title>Collin Garvey | Experienced Full-Stack Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.Header}>
        <Grid columns={1}>
          <div className={styles.masthead}>
            <Link href="/">
              <a>{'CO//IN GARVEY'}</a>
            </Link>
            <Navigation />
          </div>
        </Grid>
      </header>
    </>
  );
};

export default Header;
