import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

import styles from '../../styles/Post.module.css';

export default function Post({content, data}) {
  const frontmatter = data;

  return (
    <>
      <Hero />
      <Section>
        <article className={styles.Post}>
          <h1>{frontmatter.title}</h1>
          <ReactMarkdown source={content} />
        </article>
      </Section>
    </>
  );
}

Post.getInitialProps = async context => {
  const {slug} = context.query;
  const content = await import(`../../_posts/${slug}.md`);
  const data = matter(content.default);

  return {...data};
};
