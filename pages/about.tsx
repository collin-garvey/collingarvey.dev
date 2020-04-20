import Hero from '../components/Hero';
import Section from '../components/Section';
import {imagesPath} from '../data/config.json';

export default function About() {
  return (
    <>
      <Hero imagePath={`${imagesPath}about/about-hero.jpg`} theme="short">
        <h1>About</h1>
      </Hero>
      <Section>
        <p>Hey, I'm Collin!</p>
        <p>
          I live in sunny/humid/hurricane-y Orlando, working on cool things for
          big and small companies who enjoy cool things.
        </p>
        <p>
          I specialize in front-end web development, with a preference for these
          tools:
        </p>
        <ul>
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
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Performance"
              target="_blank"
              rel="noopener"
            >
              Web Performance
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
          Over my 12+ years in the web world I've become comfortable in many
          different things that aren't strictly related to front-end, such as:
        </p>
        <ul>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Servant_leadership"
              target="_blank"
              rel="noopener"
            >
              Servant Leadership
            </a>
          </li>
          <li>
            <a href="https://expressjs.com" target="_blank" rel="noopener">
              Express JS
            </a>
          </li>
          <li>
            <a href="https://nodejs.org" target="_blank" rel="noopener">
              Node JS
            </a>
          </li>
          <li>
            <a href="https://graphql.org/" target="_blank" rel="noopener">
              GraphQL
            </a>
          </li>
          <li>
            <a href="https://hacklang.org" target="_blank" rel="noopener">
              Hack
            </a>
          </li>
          <li>
            <a href="https://laravel.io" target="_blank" rel="noopener">
              Laravel
            </a>
          </li>
          <li>
            <a
              href="https://https://rubyonrails.org"
              target="_blank"
              rel="noopener"
            >
              Ruby on Rails
            </a>
          </li>
          <li>
            <a href="https://wpvip.com" target="_blank" rel="noopener">
              Wordpress VIP
            </a>
          </li>
          <li>
            <a href="https://www.docker.com" target="_blank" rel="noopener">
              Docker
            </a>
          </li>
          <li>
            <a href="https://aws.amazon.com" target="_blank" rel="noopener">
              AWS (EC2, S3, RDS)
            </a>
          </li>
        </ul>
      </Section>
    </>
  );
}
