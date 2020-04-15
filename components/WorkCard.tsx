import React from 'react';
import Link from 'next/link';
import styles from './WorkCard.module.css';
import {imagesPath} from '../data/config.json';

interface IProjectProps {
  slug: string;
  title: string;
}

const Project: React.SFC<IProjectProps> = props => {
  return (
    <div className={styles.workCard}>
      <Link href={`/work/${props.slug}`}>
        <a>
          <div className="aspectContainer">
            <img
              className="aspectContainer__inner"
              src={`${imagesPath}oculus-medium/oc-medium-landing.jpg`}
            />
          </div>
          <span>{props.title}</span>
        </a>
      </Link>
    </div>
  );
};

export default Project;
