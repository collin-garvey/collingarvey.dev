import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';

import styles from '../styles/work.module.css';

const Work: React.SFC = () => {
  return (
    <>
      <Hero theme="short">
        <h1>Work</h1>
      </Hero>
      <Section width="wide">
        <div className={styles.workGrid}>
          <WorkCard slug="fb-connectivity" title="Facebook Connectivity App" />
          <WorkCard
            slug="oculus-medium-website"
            title="Oculus Medium Website"
          />
        </div>
      </Section>
    </>
  );
};

export default Work;
