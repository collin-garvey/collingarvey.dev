import Link from 'next/link';
import React from 'react';
import config from '../data/config';
import {Tag, TagList} from './Tag';
import styles from './WorkCard.module.css';

interface IWorkCardProps {
  workObj: {
    document: {
      [key: string]: any;
    };
    slug: string;
  };
}

const WorkCard: React.SFC<IWorkCardProps> = props => {
  const {data} = props.workObj.document;

  return (
    <Link href={`/work/${props.workObj.slug}`}>
      <a className={styles.workCard}>
        <div className={styles.workCardImage}>
          <img src={`${config.imagesPath}${data.mainImage}`} />
        </div>
        <div className={styles.workCardDescription}>
          <h3>{data.title}</h3>
          <TagList>
            <Tag>{data.type}</Tag>
          </TagList>
          <p>{data.featuredBlurb}</p>
        </div>
      </a>
    </Link>
  );
};

export default WorkCard;
