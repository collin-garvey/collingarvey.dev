import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Grid from './../../components/Grid';
import styles from '../../styles/Post.module.css';

export default function Post({content, data}) {
  const frontmatter = data;

  return (
    <Grid columns={1}>
      <article className={styles.Post}>
        <h1>{frontmatter.title}</h1>
        <ReactMarkdown source={content} />
      </article>
    </Grid>
  );
}

Post.getInitialProps = async context => {
  const {slug} = context.query;
  const content = await import(`../../_posts/${slug}.md`);
  const data = matter(content.default);

  return {...data};
};
