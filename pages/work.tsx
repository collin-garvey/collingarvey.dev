import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import {getAllPosts, TWorkPost} from '../lib/api';
import styles from '../styles/work.module.css';

interface IWorkProps {
  allWork: [TWorkPost];
}

const Work: React.SFC<IWorkProps> = props => {
  return (
    <>
      <Hero theme="short">
        <h1>Work</h1>
      </Hero>
      <Section width="wide">
        <div className={styles.workGrid}>
          {props.allWork.length &&
            props.allWork.map((post: TWorkPost, key: number) => {
              return <WorkCard key={key} workObj={post} />;
            })}
        </div>
      </Section>
    </>
  );
};

export async function getStaticProps() {
  const workPosts = getAllPosts('work', [
    'title',
    'date',
    'slug',
    'content',
    'mainImage',
    'featuredBlurb',
    'liveURL',
    'images',
    'tags',
    'type',
  ]);

  return {
    props: {
      allWork: workPosts,
    },
  };
}

export default Work;
