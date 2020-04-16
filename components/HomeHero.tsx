import React from 'react';
import Section from '../components/Section';

import styles from './HomeHero.module.css';

const Hero: React.SFC = () => {
  return (
    <Section>
      <div className={styles.heroContent}>
        <h1>Collin Garvey</h1>
        <span>Web Engineer with a love for Front-End and Creative Tech</span>
      </div>
    </Section>
  );
};

export default Hero;
