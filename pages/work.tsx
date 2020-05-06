import Codepen from '@icons-pack/react-simple-icons/lib/Codepen';
import Github from '@icons-pack/react-simple-icons/lib/Github';
import React from 'react';
import CTA from '../components/CTA';
import ExternalLink from '../components/ExternalLink';
import Hero from '../components/Hero';
import Meta from '../components/Meta';
import PageBody from '../components/PageBody';
import Section from '../components/Section';
import WorkCard from '../components/WorkCard';
import config from '../data/config';
import {getAllPosts, TWorkPost} from '../lib/api';
import styles from '../styles/work.module.css';

const ICON_COLOR = '#94a1b2';

interface IWorkProps {
  allWork: [TWorkPost];
}

const Work: React.SFC<IWorkProps> = props => {
  return (
    <>
      <Meta
        canonical={`${config.siteUrl}/work`}
        title="Work Examples - Collin Garvey"
        description="A collection of work examples by Collin Garvey"
      />
      <Hero theme="short">
        <h1>Work</h1>
      </Hero>
      <PageBody>
        <Section width="wide">
          <div className={styles.workGrid}>
            {props.allWork.length &&
              props.allWork.map((post: TWorkPost, key: number) => {
                return <WorkCard key={key} workObj={post} />;
              })}
          </div>
        </Section>
        <Section width="wide">
          <p className={styles.experimentsCta}>
            Check out my{' '}
            <ExternalLink href="https://codepen.io/collin-garvey">
              <Codepen color={ICON_COLOR} size={24} />
              CodePen
            </ExternalLink>{' '}
            and{' '}
            <ExternalLink href="https://github.com/collin-garvey">
              <Github color={ICON_COLOR} size={24} />
              GitHub
            </ExternalLink>{' '}
            accounts for side projects and experiements!
          </p>
        </Section>
        <Section width="wide" className={styles.legacyProjects}>
          <h2>Legacy Projects</h2>
          <p>
            The following links are sites I've made at least significant
            contributions to, but may not represent my current skill set or be
            in the same state as when I completed work on them, given they were
            built over two+ years ago.
          </p>

          <ul>
            <li>
              <p>
                <ExternalLink href="https://live.fb.com">
                  Facebook Live Marketing Website
                </ExternalLink>
              </p>
              <p>Wordpress VIP - Feature/page additions and maintenance</p>
            </li>
            <li>
              <p>
                <ExternalLink href="https://facebook360.fb.com/">
                  Facebook 360 Marketing Website
                </ExternalLink>
              </p>
              <p>Wordpress VIP - Feature/page additions and maintenance</p>
            </li>
            <li>
              <p>
                <ExternalLink href="https://www.viewpost.com">
                  Viewpost Marketing Website
                </ExternalLink>
              </p>
              <p>Wordpress - Complete build</p>
            </li>
          </ul>
        </Section>
        <Section width="wide">
          <h2>Looking for help?</h2>
          <CTA>
            <p>
              <strong>
                I'm currently open to full time and freelance opportunities.
              </strong>
            </p>
            <p>
              <a href={`mailto:${config.contactEmail}`}>Send me an e-mail</a> or
              find me on social!
            </p>
          </CTA>
        </Section>
      </PageBody>
    </>
  );
};

export async function getStaticProps() {
  const workPosts = getAllPosts('work', [
    'title',
    'date',
    'slug',
    'content',
    'mainImage',
    'featuredBlurb',
    'liveURL',
    'images',
    'tags',
    'type',
  ]);

  return {
    props: {
      allWork: workPosts,
    },
  };
}

export default Work;
