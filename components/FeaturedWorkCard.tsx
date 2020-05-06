import Link from 'next/link';
import React from 'react';
import config from '../data/config.js';
import styles from './FeaturedWorkCard.module.css';
import LinkButton from './LinkButton';

interface IFeaturedWorkProps {
  slug: string;
  workObject: {
    frontmatter: {
      [key: string]: any;
    };
    markdown: string;
  };
}

const Project: React.SFC<IFeaturedWorkProps> = props => {
  const {frontmatter} = props.workObject;

  return (
    <div className={styles.FeaturedProjectCard}>
      <Link href="/work/[slug]" as={`/work/${props.slug}`}>
        <a className={styles.imageWrap}>
          <img
            src={`${config.imagesPath}${frontmatter.mainImage.url}`}
            alt={`${frontmatter.mainImage.alt}`}
          />
        </a>
      </Link>
      <div className={styles.description}>
        <Link href="/work/[slug]" as={`/work/${props.slug}`}>
          <a>
            <h3>{frontmatter.title}</h3>
          </a>
        </Link>
        <p>{frontmatter.featuredBlurb}</p>
        <LinkButton
          theme="highlight"
          href="/work/[slug]"
          as={`/work/${props.slug}`}
        >
          View Project
        </LinkButton>
      </div>
    </div>
  );
};

export default Project;
