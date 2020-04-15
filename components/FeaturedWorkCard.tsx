import React from 'react';
import Link from 'next/link';
import styles from './FeaturedWorkCard.module.css';
import {imagesPath} from '../data/config.json';

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
      <div className={styles.aspectContainer}>
        <img
          className={styles.aspectContainer__inner}
          src={`${imagesPath}${workObject.frontmatter.mainImage}`}
        />
      </div>
      <div>
        <Link href={`/work/${props.slug}`}>
          <a>
            <h3>{workObject.frontmatter.title}</h3>
          </a>
        </Link>
        <p></p>
      </div>
    </div>
  );
};

export default Project;
