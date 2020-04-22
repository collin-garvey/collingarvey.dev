import Link from 'next/link';
import {useEffect} from 'react';
import FeaturedWorkCard from '../components/FeaturedWorkCard';
import HomeHero from '../components/HomeHero';
import Section from '../components/Section';
import {destroyScene, setupScene} from '../lib/Hero3D';
import {getWorkBySlug} from '../lib/workUtils';
import styles from '../styles/Index.module.css';

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
      <Section>
        <h3>A Bit About Me</h3>
        <p>
          Over my 12+ years of experience, I've uncovered a passion for
          componentized web interfaces and highly-engaging creative experiences
          that take advantage of the best tech the web has to offer. I've built
          neat things for{' '}
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
          where I previously served as Development Manager.
        </p>
        <div className={styles.sectionBump}>
          <Link href="/about">
            <a>
              Read More <span>&#10097;</span>
            </a>
          </Link>
        </div>
      </Section>

      <Section>
        <h3>Featured Project</h3>
        <FeaturedWorkCard
          slug={siteConfig.featuredWorkSlug}
          workObject={featuredWork}
        />
        <div className={styles.sectionBump}>
          <Link href="/work">
            <a>
              View All Work <span>&#10097;</span>
            </a>
          </Link>
        </div>
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
