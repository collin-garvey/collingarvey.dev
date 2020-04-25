import {useEffect} from 'react';
import FeaturedWorkCard from '../components/FeaturedWorkCard';
import HomeHero from '../components/HomeHero';
import Section from '../components/Section';
import SectionBump from '../components/SectionBump';
import config from '../data/config';
import {destroyScene, setupScene} from '../lib/Hero3D';
import {getWorkBySlug} from '../lib/workUtils';
import styles from '../styles/Index.module.css';
import ExternalLink from './../components/ExternalLink';

const Index = props => {
  // Instantiate the ThreeJS scene
  useEffect(() => {
    setupScene();

    return () => {
      destroyScene();
    };
  }, []);

  const {featuredWork, config} = props;

  return (
    <>
      <div id="heroScene" className={styles.threeScene} />
      <HomeHero />
      <Section>
        <h2>A Bit About Me</h2>
        <p>
          Over my 12+ years of experience, I've uncovered a passion for
          componentized web interfaces and highly-engaging creative experiences
          that take advantage of the best tech the web has to offer. I've built
          neat things for{' '}
          <ExternalLink href="https://oculus.com">Oculus VR</ExternalLink>,{' '}
          <ExternalLink href="https://facebook.com">Facebook</ExternalLink>, and{' '}
          <ExternalLink href="https://prpl.rs">
            Purple Rock Scissors
          </ExternalLink>{' '}
          where I previously served as Development Manager.
        </p>
        <SectionBump href="/about">Read More</SectionBump>
      </Section>

      <Section>
        <h2>Featured Project</h2>
        <FeaturedWorkCard
          slug={config.featuredWorkSlug}
          workObject={featuredWork}
        />
        <SectionBump href="/work">View All Work</SectionBump>
      </Section>
    </>
  );
};

Index.getInitialProps = async () => {
  // TODO - Fix this "any" type
  const featuredWork = await getWorkBySlug(config.featuredWorkSlug);

  return {
    featuredWork,
    config,
  };
};

export default Index;
