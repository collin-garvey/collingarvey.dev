import {useEffect} from 'react';
import Project from '../components/ProjectCard';
import styles from './Index.module.css';
import {setupScene, destroyScene} from '../lib/Hero3D';

const Index: React.FC = () => {
  // Instantiate the ThreeJS scene
  useEffect(() => {
    setupScene();

    return () => {
      destroyScene();
    };
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div id="heroScene" className={styles.heroScene} />
        <div className={styles.heroContent}>
          <h2 className={styles.h2}>Living life, bit by bit</h2>
        </div>
      </section>
      <section>
        <h3>My Work</h3>
        <p className={styles.intro}>
          I've built neat things for{' '}
          <a href="https://oculus.com" target="_blank">
            Oculus VR
          </a>
          ,{' '}
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>
          , and{' '}
          <a href="https://prpl.rs" target="_blank">
            Purple Rock Scissors
          </a>{' '}
          where I previously served as Development Manager. I've done pretty
          much everything web related over my 12 years of experinece, but I
          enjoy front-end development the most. I'm really into React and
          isomorphic JS, in general. I also dabble in{' '}
          <a href="https://codepen.io/collin-garvey">creative coding</a> when
          I'm feeling spicy.
        </p>
      </section>
      <section>
        <div>
          <p>I've recently started a blog. Have some reads:</p>
          <h3>Blog Posts</h3>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Index;
