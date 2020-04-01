import React from 'react';
import {Url} from 'url';

import styles from './ProjectCard.module.css';

interface IProjectProps {
  url?: string;
  title: string;
}

const Project: React.SFC<IProjectProps> = props => {
  return (
    <div className={styles.projectCard}>
      <a href={props.url}>
        <div className={styles.aspectContainer}>
          <img
            className={styles.aspectContainer__inner}
            src="/static/images/projects/oculus-medium/oc-medium-landing.jpg"
          />
        </div>
        <span className="project__title">{props.title}</span>
      </a>
    </div>
  );
};

export default Project;
