import {useEffect} from 'react';
import Link from 'next/link';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import Hero from '../components/Hero';
import Section from '../components/Section';
import LinkButton from '../components/LinkButton';
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

  const {featuredProject, siteConfig} = props;

  console.log(featuredProject);

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
        <FeaturedProjectCard
          slug={siteConfig.featuredWorkSlug}
          title={featuredProject.frontmatter.title}
        />
        <LinkButton theme="highlight" href="/work/">
          View more
        </LinkButton>
      </Section>
    </>
  );
};

Index.getInitialProps = async () => {
  const siteConfig = await import('../data/config.json');
  const featuredProject = await getWorkBySlug(siteConfig.featuredWorkSlug);

  return {
    featuredProject,
    siteConfig,
  };
};

export default Index;
