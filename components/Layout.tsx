import Head from 'next/head';
import React from 'react';
import config from '../data/config';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

const Layout: React.SFC = props => {
  return (
    <>
      <Meta
        title={config.title}
        canonical={config.siteUrl}
        description={config.description}
      />
      <Head>
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
