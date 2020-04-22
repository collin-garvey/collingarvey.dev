import Codepen from '@icons-pack/react-simple-icons/lib/Codepen';
import Github from '@icons-pack/react-simple-icons/lib/Github';
import Linkedin from '@icons-pack/react-simple-icons/lib/Linkedin';
import Twitter from '@icons-pack/react-simple-icons/lib/Twitter';
import React from 'react';
import styles from './HomeHero.module.css';

const ICON_COLOR = '#94a1b2';

const Hero: React.SFC = () => {
  return (
    <div className={styles.HomeHero}>
      <div className={styles.heroContent}>
        <h1>Collin Garvey</h1>
        <span>
          Front-End Engineer focused on building web UIs and creative
          experiences
        </span>
        <nav className={styles.socials}>
          <a href="https://github.com/collin-garvey">
            <Github color={ICON_COLOR} size={24} />
          </a>
          <a href="https://www.twitter.com/collingarvey">
            <Twitter color={ICON_COLOR} size={24} />
          </a>
          <a href="https://codepen.io/collin-garvey">
            <Codepen color={ICON_COLOR} size={24} />
          </a>
          <a href="https://www.linkedin.com/in/collingarvey/">
            <Linkedin color={ICON_COLOR} size={24} />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
