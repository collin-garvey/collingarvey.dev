import Codepen from '@icons-pack/react-simple-icons/lib/Codepen';
import Github from '@icons-pack/react-simple-icons/lib/Github';
import Gmail from '@icons-pack/react-simple-icons/lib/Gmail';
import Linkedin from '@icons-pack/react-simple-icons/lib/Linkedin';
import Twitter from '@icons-pack/react-simple-icons/lib/Twitter';
import React, {useEffect} from 'react';
import config from '../data/config';
import {destroyScene, setupScene} from '../lib/Hero3D';
import styles from './HomeHero.module.css';

const ICON_COLOR = '#94a1b2';

const Hero: React.SFC = () => {
  // Instantiate the ThreeJS scene
  useEffect(() => {
    setupScene();

    return () => {
      destroyScene();
    };
  }, []);
  return (
    <>
      <div className={styles.HomeHero}>
        <div id="heroScene" className={styles.threeScene} />
        <div className={styles.heroContent}>
          <h1>Collin Garvey</h1>
          <span>
            Web Engineer focused on building UIs and creative experiences
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
            <a href={`mailto:${config.contactEmail}`}>
              <Gmail color={ICON_COLOR} size={24} />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Hero;
