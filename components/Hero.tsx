import React from 'react';
import styles from './Hero.module.css';

interface IHeroProps {
  imagePath?: string;
}

const Hero: React.SFC<IHeroProps> = props => {
  return (
    <div className={styles.hero}>
      {props.imagePath && (
        <div
          className={styles.heroImage}
          style={{backgroundImage: `url(${props.imagePath})`}}
        />
      )}
      <div className={styles.heroContent}>{props.children}</div>
    </div>
  );
};

export default Hero;
