import Link from 'next/link';
import React from 'react';
import config from '../data/config';
import {TWorkPost} from '../lib/api';
import {Tag, TagList} from './Tag';
import styles from './WorkCard.module.css';

interface IWorkCardProps {
  workObj: TWorkPost;
}

const WorkCard: React.SFC<IWorkCardProps> = props => {
  const {workObj} = props;

  return (
    <Link href={`/work/${workObj.slug}`}>
      <a className={styles.workCard}>
        <div className={styles.workCardImage}>
          <img src={`${config.imagesPath}${workObj.mainImage}`} />
        </div>
        <div className={styles.workCardDescription}>
          <h3>{workObj.title}</h3>
          <TagList>
            <Tag>{workObj.type}</Tag>
          </TagList>
          <p>{workObj.featuredBlurb}</p>
        </div>
      </a>
    </Link>
  );
};

export default WorkCard;
