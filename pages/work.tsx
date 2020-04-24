import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import {getAllWork} from '../lib/workUtils';
import styles from '../styles/work.module.css';

const Work = props => {
  return (
    <>
      <Hero theme="short">
        <h1>Work</h1>
      </Hero>
      <Section width="wide">
        <div className={styles.workGrid}>
          {props.allWork.length &&
            props.allWork.map((post, key: number) => {
              return <WorkCard key={key} workObj={post} />;
            })}
        </div>
      </Section>
    </>
  );
};

Work.getStaticProps = async () => {
  const siteConfig = await import('../data/config.js');
  const workPosts = await getAllWork();

  return {
    allWork: workPosts,
    ...siteConfig,
  };
};

export default Work;
