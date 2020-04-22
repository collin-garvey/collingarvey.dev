import {useState} from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import {imagesPath} from '../../data/config.json';
import Carousel from '../../components/Carousel';
import CTASection from '../../components/CTASection';
import FsLightbox from 'fslightbox-react';

import styles from '../../styles/WorkPost.module.css';

export default function Post({content, data}) {
  const frontmatter = data;
  const carouselImages = frontmatter.images.map((path: string) => {
    return `${imagesPath}${path}`;
  });
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <Hero imagePath={`${imagesPath}${frontmatter.mainImage}`}>
        <h1>{frontmatter.title}</h1>
      </Hero>
      <Section width="wide">
        <article className={styles.WorkPost}>
          <div className={styles.sidebar}>
            <h3>Project Type</h3>
            <div className={styles.tagList}>
              <span className={styles.tag}>{frontmatter.type}</span>
            </div>
            <h3>Technologies</h3>
            <div className={styles.tagList}>
              {frontmatter.tags.map((tag: string, index: number) => {
                return (
                  <span className={styles.tag} key={index}>
                    {tag}
                  </span>
                );
              })}
            </div>
            {frontmatter.liveUrl && (
              <>
                <h3>URL</h3>
                <div className={styles.tagList}>
                  <span className={styles.tag}>
                    <a href={frontmatter.liveUrl} target="_blank">
                      {frontmatter.liveUrl}
                    </a>
                  </span>
                </div>
              </>
            )}
            <button onClick={() => setToggler(!toggler)}>View Gallery</button>
            <FsLightbox toggler={toggler} sources={carouselImages} />
          </div>
          <div className={styles.postContent}>
            <ReactMarkdown source={content} className={styles.markdown} />
          </div>
        </article>
      </Section>
      <CTASection />
    </>
  );
}

Post.getInitialProps = async context => {
  const {slug} = context.query;
  const content = await import(`../../_work/${slug}.md`);
  const data = matter(content.default);

  return {...data};
};
