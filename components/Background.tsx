import React, {useEffect} from 'react';
import init from '../lib/background/Background';
import styles from './Background.module.css';

const Background = () => {
  useEffect(() => {
    init('backgroundCanvas');
  }, []);
  return <canvas id="backgroundCanvas" className={styles.canvas}></canvas>;
};

export default Background;
