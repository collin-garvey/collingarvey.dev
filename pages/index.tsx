import {useEffect} from 'react';
import Link from 'next/link';
import FeaturedWorkCard from '../components/FeaturedWorkCard';
import HomeHero from '../components/HomeHero';
import Section from '../components/Section';
import {setupScene, destroyScene} from '../lib/Hero3D';
import {getWorkBySlug} from '../lib/workUtils';

import styles from './Index.module.css';

const Index = props => {
  // Instantiate the ThreeJS scene
  useEffect(() => {
    setupScene();

    return () => {
      destroyScene();
    };
  }, []);

  const {featuredWork, siteConfig} = props;

  return (
    <>
      <div id="heroScene" className={styles.threeScene} />
      <HomeHero />
      <Section theme="light">
        <p>
          I've built neat things for{' '}
          <a href="https://oculus.com" rel="noopener" target="_blank">
            Oculus VR
          </a>
          ,{' '}
          <a href="https://facebook.com" rel="noopener" target="_blank">
            Facebook
          </a>
          , and{' '}
          <a href="https://prpl.rs" rel="noopener" target="_blank">
            Purple Rock Scissors
          </a>{' '}
          where I previously served as Development Manager. I've done pretty
          much everything web related over my 12 years of experience, but I
          enjoy front-end development the most.
        </p>
        <p>
          I'm really into React and isomorphic JS, in general. I also dabble in{' '}
          <a
            href="https://codepen.io/collin-garvey"
            rel="noopener"
            target="_blank"
          >
            creative coding
          </a>{' '}
          when I'm feeling spicy.
        </p>
      </Section>
      <Section>
        <h3>Featured Project</h3>
        <FeaturedWorkCard
          slug={siteConfig.featuredWorkSlug}
          workObject={featuredWork}
        />
      </Section>
      <Section theme="light">
        <p>
          <Link href="/work">
            <a>View all work →</a>
          </Link>
        </p>
      </Section>
    </>
  );
};

Index.getInitialProps = async () => {
  const siteConfig = await import('../data/config.json');
  const featuredWork = await getWorkBySlug(siteConfig.featuredWorkSlug);

  return {
    featuredWork,
    siteConfig,
  };
};

export default Index;
