import Link from 'next/link';
import React from 'react';
import config from '../data/config';
import {TWorkPost} from '../lib/api';
import LinkButton from './LinkButton';
import {TagList} from './TagList';
import styles from './WorkCard.module.css';

interface IWorkCardProps {
  workObj: TWorkPost;
}

const WorkCard: React.SFC<IWorkCardProps> = props => {
  const {workObj} = props;
  const workImage = require(`../public/static/images/${workObj.mainImage.url}?resize&size=650`);
  console.log(workImage);
  return (
    <div className={styles.workCard}>
      <Link href="/work/[slug]" as={`/work/${workObj.slug}`}>
        <a>
          <div className={styles.workCardImage}>
            <img src={workImage.src} alt={workObj.mainImage.alt} />
          </div>
        </a>
      </Link>
      <div className={styles.workCardDescription}>
        <Link href="/work/[slug]" as={`/work/${workObj.slug}`}>
          <a>
            <h3>{workObj.title}</h3>
          </a>
        </Link>
        <TagList tags={[workObj.type]} />
        <p>{workObj.featuredBlurb}</p>
        <LinkButton
          href="/work/[slug]"
          as={`/work/${workObj.slug}`}
          theme="highlight"
        >
          Read more
        </LinkButton>
      </div>
    </div>
  );
};

export default WorkCard;
