import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Project from '../components/WorkCard';

import styles from '../styles/work.module.css';

const Work: React.SFC = () => {
  return (
    <>
      <Hero theme="short">
        <h1>Work</h1>
      </Hero>
      <Section width="wide">
        <div className={styles.workGrid}>
          <Project slug="fb-connectivity" title="Facebook Connectivity App" />
        </div>
      </Section>
    </>
  );
};

export default Work;
