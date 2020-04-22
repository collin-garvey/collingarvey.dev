import Link from 'next/link';
import React from 'react';
import {imagesPath} from '../data/config.json';
import styles from './WorkCard.module.css';

interface IWorkCardProps {
  slug: string;
  title: string;
}

const WorkCard: React.SFC<IWorkCardProps> = props => {
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

export default WorkCard;
