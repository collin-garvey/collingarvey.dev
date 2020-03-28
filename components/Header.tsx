import Link from 'next/link';
import Head from 'next/head';
import Grid from './Grid';
import styles from './Header.module.css';

const Header: React.FC = () => {
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
          <div className={styles.masthead}>
            <img
              className={styles.headshot}
              src="/static/images/headshot.jpg"
              alt="Photo of Collin Garvey looking sexy AF"
            />
            <div>
              <h1>Collin Garvey</h1>
              <span>Full-Stack Engineer</span>
            </div>
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
          </div>
        </Grid>
      </header>
    </>
  );
};

export default Header;
