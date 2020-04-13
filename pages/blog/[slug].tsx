import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import styles from '../../styles/Post.module.css';

export default function Post({content, data}) {
  const frontmatter = data;

  return (
    <article className={styles.Post}>
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown source={content} />
    </article>
  );
}

Post.getInitialProps = async context => {
  const {slug} = context.query;
  const content = await import(`../../_posts/${slug}.md`);
  const data = matter(content.default);

  return {...data};
};
