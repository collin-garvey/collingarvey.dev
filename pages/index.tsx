import {useEffect} from 'react';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import Hero from '../components/Hero';
import Section from '../components/Section';
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
      <div id="heroScene" className={styles.threeScene} />
      <Hero />
      <Section theme="light">
        <p>
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
          much everything web related over my 12 years of experience, but I
          enjoy front-end development the most.
        </p>
        <p>
          I'm really into React and isomorphic JS, in general. I also dabble in{' '}
          <a href="https://codepen.io/collin-garvey">creative coding</a> when
          I'm feeling spicy.
        </p>
      </Section>
      <Section>
        <h3>Featured Project</h3>
        <ProjectCard title="Oculus Medium" />
        <Link href="/work/">View more</Link>
      </Section>
    </>
  );
};

export default Index;
