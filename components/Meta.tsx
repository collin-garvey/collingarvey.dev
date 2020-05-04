import React from 'react';
import Head from 'next/head';
import config from '../data/config';

interface IMetaProps {
  canonical: string;
  title: string;
  description: string;
}

const Meta: React.SFC<IMetaProps> = props => {
  return (
    <Head>
      <title key="title">{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta key="description" name="description" content={props.description} />
      <meta key="image" name="image" content={config.ogImage} />
      {/* Schema.org for Google */}
      <meta key="struct:name" itemProp="name" content={config.siteName} />
      <meta
        key="struct:description"
        itemProp="description"
        content={props.description}
      />
      <meta key="struct:image" itemProp="image" content={config.ogImage} />
      {/* Twitter */}
      <meta key="twitter:card" name="twitter:card" content="summary" />
      <meta key="twitter:title" name="twitter:title" content={props.title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={props.description}
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
      <meta key="og:title" property="og:title" content={props.title} />
      <meta
        key="og:description"
        property="og:description"
        content={props.description}
      />
      <meta key="og:image" property="og:image" content={config.ogImage} />
      <meta key="og:url" property="og:url" content={config.siteUrl} />
      <meta
        key="og:site_name"
        property="og:site_name"
        content={config.siteName}
      />
      <meta key="og:type" property="og:type" content="website" />
      {props.children}
    </Head>
  );
};

export default Meta;
