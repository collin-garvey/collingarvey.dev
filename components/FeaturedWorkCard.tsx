import cx from 'classnames';
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
  const {workObject} = props;

  return (
    <div className={styles.FeaturedProjectCard}>
      <Link href={`/work/${props.slug}`}>
        <a>
          <div className={cx(styles.aspectContainer, styles.imageWrap)}>
            <img
              className={styles.aspectContainer__inner}
              src={`${config.imagesPath}${workObject.frontmatter.mainImage}`}
            />
          </div>
        </a>
      </Link>
      <div className={styles.description}>
        <Link href={`/work/${props.slug}`}>
          <a>
            <h3>{workObject.frontmatter.title}</h3>
          </a>
        </Link>
        <p>{workObject.frontmatter.featuredBlurb}</p>
        <LinkButton theme="highlight" href="/work/">
          View Project
        </LinkButton>
      </div>
    </div>
  );
};

export default Project;
