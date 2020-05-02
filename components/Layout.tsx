import Head from 'next/head';
import React from 'react';
import config from '../data/config';
import Footer from './Footer';
import Header from './Header';

const Layout: React.SFC = props => {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`${config.description}`} />
        <link
          rel="icon"
          type="image/x-icon"
          href={`${config.imagesPath}logo.svg`}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
