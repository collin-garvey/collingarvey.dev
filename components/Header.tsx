import Link from 'next/link';
import Head from 'next/head';

const Header: React.FC = () => {
  return (
    <>
      <Head>
        <title>Collin Garvey</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container container--grid">
        <div className="container__row">
          <h1>
            Collin <small>Hale</small> Garvey
          </h1>
          <h2>Web Developer</h2>
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
