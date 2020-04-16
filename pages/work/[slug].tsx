import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import {imagesPath} from '../../data/config.json';
import Carousel from '../../components/Carousel';

import styles from '../../styles/WorkPost.module.css';

export default function Post({content, data}) {
  const frontmatter = data;
  const carouselImages = frontmatter.images.map((path: string) => {
    return {
      source: `${imagesPath}${path}`,
    };
  });

  return (
    <>
      <Hero headline={frontmatter.title} />
      <Section width="wide">
        <article className={styles.WorkPost}>
          <div className={styles.sidebar}>
            <Carousel images={carouselImages} />
          </div>
          <div className={styles.postContent}>
            <ReactMarkdown source={content} />
          </div>
        </article>
      </Section>
    </>
  );
}

Post.getInitialProps = async context => {
  const {slug} = context.query;
  const content = await import(`../../_work/${slug}.md`);
  const data = matter(content.default);

  return {...data};
};
