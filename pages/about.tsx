import CTA from '../components/CTA';
import ExternalLink from '../components/ExternalLink';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SkillsTree from '../components/SkillsTree';
import config from '../data/config';
import styles from '../styles/about.module.css';

export default function About() {
  return (
    <>
      <Hero
        imagePath={`${config.imagesPath}about/about-hero.jpg`}
        theme="short"
      >
        <h1>About</h1>
      </Hero>
      <Section>
        <h2>Hey, I'm Collin!</h2>
        <div className={styles.intro}>
          <img
            src={`${config.imagesPath}about/boom-headshot.jpg`}
            alt="Collin Garvey's face"
          />
          <p>
            I live in sunny, humid, and hurricane-y Orlando, FL working on cool
            web things for big and small companies who enjoy cool things.
          </p>
          <p>
            I'm a big fan of soccer and video games, I think hawaiian pizza is
            pretty OK, and yes, I've seen that show on Netflix.
          </p>
        </div>
      </Section>
      <Section>
        <h2>Muh Skillz</h2>
        <p>
          I specialize in front-end web development, with a preference for these
          tools:
        </p>
        <ul className="columnarList">
          <li>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              rel="noopener"
            >
              TypeScript
            </a>
          </li>
          <li>
            <a href="https://reactjs.org" target="_blank" rel="noopener">
              React
            </a>
          </li>
          <li>
            <a href="https://nextjs.org" target="_blank" rel="noopener">
              NextJS
            </a>
          </li>
          <li>
            <a
              href="https://github.com/css-modules/css-modules"
              target="_blank"
              rel="noopener"
            >
              CSS Modules
            </a>
          </li>
          <li>
            <a href="https://sass-lang.com/" target="_blank" rel="noopener">
              SASS
            </a>
          </li>
          <li>
            <a
              href="https://styled-components.com/"
              target="_blank"
              rel="noopener"
            >
              Styled Components
            </a>
          </li>
          <li>
            <a href="https://jestjs.io/" target="_blank" rel="noopener">
              Jest
            </a>
          </li>
          <li>
            <a href="https://www.cypress.io/" target="_blank" rel="noopener">
              Cypress
            </a>
          </li>
        </ul>
        <p>
          Below I've created a{' '}
          <ExternalLink href="https://en.wikipedia.org/wiki/Circle_packing">
            circle packing chart
          </ExternalLink>{' '}
          to give you a nice idea of my relative confidence in getting work done
          across a broad set of technologies. I've picked up a lot over my 12+
          years of experience, so this isn't an exhaustive list, but I tried to
          hit the most important ones to me.
        </p>
        <p>
          <strong>
            Click on the different colored circles to zoom in and out of levels
            of specificity. Each inner-most item has a confidence score, 1-10
            from low condifence to high.
          </strong>
        </p>
        <SkillsTree />
      </Section>
      <Section>
        <h2>Learning Roadmap</h2>
        <p>
          Learning something new is just another way to have fun. I try to
          practice or try something new at least a few times a week, if not
          every day.
        </p>
        <p>
          I'm a big proponent of spending money to accelerate learning, if one
          is able to do so. After all, time is our most valuable resource.
        </p>
        <p>Here's a list of things I'm learning about currently:</p>
        <ul className="columnarList">
          <li>
            <ExternalLink href="https://threejs.org">ThreeJS</ExternalLink> and
            WebGL shaders
          </li>
          <li>Microservice Architecture in Node</li>
          <li>
            <ExternalLink href="https://xstate.js.org/">XState</ExternalLink>{' '}
            and state charts
          </li>
          <li>
            <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API">
              Web Animations API
            </ExternalLink>
          </li>
          <li>Serverless technology</li>
          <li>
            <ExternalLink href="https://svelte.dev/">Svelte</ExternalLink>
          </li>
        </ul>
      </Section>
      <Section width="normal">
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
    </>
  );
}
