import cx from 'classnames';
import React from 'react';
import styles from './Hero.module.css';
interface IHeroProps {
  imagePath?: string;
  theme?: 'short' | 'tall';
}

const Hero: React.SFC<IHeroProps> = props => {
  return (
    <div
      className={cx(styles.hero, {
        [styles.heroShort]: props.theme === 'short',
        [styles.heroTall]: props.theme === 'tall',
      })}
    >
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
