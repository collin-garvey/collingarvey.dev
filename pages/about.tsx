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
        <p>This is the about page</p>
      </Section>
    </>
  );
}
