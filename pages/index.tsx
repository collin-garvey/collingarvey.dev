import {useEffect} from 'react';
import Project from '../components/ProjectCard';
import Grid from '../components/Grid';
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
      <div id="heroScene" className={styles.heroScene} />
      <section className={styles.hero}>
        <Grid columns={1}>
          <div className={styles.heroContent}>
            <h2>Collin Garvey</h2>
            <span>
              Front-end engineer and creative technologist based in Orlando, FL
            </span>
          </div>
        </Grid>
      </section>
      <section>
        <h3>My Work</h3>
        <Grid columns={1}>
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
        </Grid>
        <Grid columns={1}>
          <Project url="https://www.oculus.com/medium/" title="Oculus Medium" />
          <Project
            url="https://facebook.com/"
            title="Facebook Connectivity App"
          />
          <Project
            url="https://transparency.facebook.com/"
            title="Facebook Transparency"
          />
          {/* <Project
            url="https://politics.facebook.com/"
            title="Facebook Government Politics &amp; Advocacy"
          /> */}
        </Grid>
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
