import Head from 'next/head';
import React from 'react';
import config from '../data/config';
import Footer from './Footer';
import Header from './Header';

const Layout: React.SFC = props => {
  return (
    <>
      <Head>
        <title key="title">{config.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          key="description"
          name="description"
          content={config.description}
        />
        <meta key="image" name="image" content={config.ogImage} />
        {/* Schema.org for Google */}
        <meta key="struct:name" itemProp="name" content={config.siteName} />
        <meta
          key="struct:description"
          itemProp="description"
          content={config.description}
        />
        <meta key="struct:image" itemProp="image" content={config.ogImage} />
        {/* Twitter */}
        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta key="twitter:title" name="twitter:title" content={config.title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={config.description}
        />
        <meta
          key="twitter:site"
          name="twitter:site"
          content={config.twitterHandle}
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content={config.twitterHandle}
        />
        <meta
          key="twitter:image"
          name="twitter:image:src"
          content={config.twitterImage}
        />
        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta key="og:title" property="og:title" content={config.title} />
        <meta
          key="og:description"
          property="og:description"
          content={config.description}
        />
        <meta key="og:image" property="og:image" content={config.ogImage} />
        <meta key="og:url" property="og:url" content={config.siteUrl} />
        <meta
          key="og:site_name"
          property="og:site_name"
          content={config.siteName}
        />
        <meta key="og:type" property="og:type" content="website" />
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
