import styles from './Index.module.css';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Collin Garvey</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.intro}>
        <h1>
          Collin <small>Hale</small> Garvey
        </h1>
        <h2>Placeholder text</h2>

        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Just a link to click</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
