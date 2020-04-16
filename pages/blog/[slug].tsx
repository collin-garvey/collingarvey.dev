import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Hero from '../../components/Hero';
import Section from '../../components/Section';

import styles from '../../styles/Post.module.css';

export default function Post({content, data}) {
  const frontmatter = data;

  return (
    <>
      <Hero headline={frontmatter.title} />
      <Section>
        <article className={styles.Post}>
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
