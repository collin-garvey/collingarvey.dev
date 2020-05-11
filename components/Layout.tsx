import Head from 'next/head';
import React from 'react';
import config from '../data/config';
import Footer from './Footer';
import Header from './Header';
import Background from './Background';
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
      </Head>
      <Header />
      <Background />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
