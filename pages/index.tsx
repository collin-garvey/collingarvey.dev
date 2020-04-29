import FeaturedWorkCard from '../components/FeaturedWorkCard';
import HomeHero from '../components/HomeHero';
import Section from '../components/Section';
import SectionBump from '../components/SectionBump';
import config from '../data/config';
import {getWorkBySlug} from '../lib/workUtils';
import styles from '../styles/index.module.css';
import ExternalLink from './../components/ExternalLink';

interface IIndexProps {
  featuredWork: {
    frontmatter: {
      [key: string]: any;
    };
    markdown: string;
  };
}

const Index: React.SFC<IIndexProps> = props => {
  const {featuredWork} = props;

  return (
    <>
      <HomeHero />
      <Section>
        <h2>A Bit About Me</h2>
        <p className={styles.intro}>
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

export async function getStaticProps() {
  const featuredWork = await getWorkBySlug(config.featuredWorkSlug);

  return {
    props: {
      featuredWork: featuredWork,
    },
  };
}

export default Index;
