import React from 'react';
import Section from '../components/Section';

import styles from './Hero.module.css';

interface IHeroProps {
  headline: string;
  imagePath?: string;
}

const Hero: React.SFC<IHeroProps> = props => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>{props.headline}</h1>
      </div>
    </div>
  );
};

export default Hero;
