import React from 'react';
import Link from 'next/link';
import styles from './FeaturedProjectCard.module.css';

interface IFeaturedProjectProps {
  slug: string;
  title: string;
}

const Project: React.SFC<IFeaturedProjectProps> = props => {
  return (
    <div className={styles.FeaturedProjectCard}>
      <div className={styles.aspectContainer}>
        <img
          className={styles.aspectContainer__inner}
          src="/static/images/projects/oculus-medium/oc-medium-landing.jpg"
        />
      </div>
      <div>
        <Link href={`/work/${props.slug}`}>
          <a>
            <h3 className="project__title">{props.title}</h3>
          </a>
        </Link>
        <p></p>
      </div>
    </div>
  );
};

export default Project;
