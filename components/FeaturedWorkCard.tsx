import React from 'react';
import Link from 'next/link';
import LinkButton from './LinkButton';
import styles from './FeaturedWorkCard.module.css';
import {imagesPath} from '../data/config.json';
import cx from 'classnames';

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
      <div className={cx(styles.aspectContainer, styles.imageWrap)}>
        <Link href={`/work/${props.slug}`}>
          <a>
            <img
              className={styles.aspectContainer__inner}
              src={`${imagesPath}${workObject.frontmatter.mainImage}`}
            />
          </a>
        </Link>
      </div>
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
