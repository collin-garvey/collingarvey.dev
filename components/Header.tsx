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
          href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@600&family=Source+Sans+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.Header}>
        <Grid columns={1}>
          <Link href="/">
            <div className={styles.masthead}>
              <img
                className={styles.headshot}
                src="/static/images/headshot.jpg"
                alt="Colliente"
              />

              <Navigation />
            </div>
          </Link>
        </Grid>
      </header>
    </>
  );
};

export default Header;
