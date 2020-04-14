import React from 'react';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface IProjectProps {
  slug: string;
  title: string;
}

const Project: React.SFC<IProjectProps> = props => {
  return (
    <div className={styles.projectCard}>
      <Link href={`/work/${props.slug}`}>
        <a>
          <div className={styles.aspectContainer}>
            <img
              className={styles.aspectContainer__inner}
              src="/static/images/projects/oculus-medium/oc-medium-landing.jpg"
            />
          </div>
          <span className="project__title">{props.title}</span>
        </a>
      </Link>
    </div>
  );
};

export default Project;
