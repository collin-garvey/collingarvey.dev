import ReactMarkdown from 'react-markdown';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import {getAllPosts, getPostBySlug, TPost} from '../../lib/api';
import styles from '../../styles/Post.module.css';

interface IPostProps {
  post: TPost;
}

const Post: React.SFC<IPostProps> = props => {
  return (
    <>
      <Hero>
        <h1>{props.post.title}</h1>
      </Hero>
      <Section>
        <article className={styles.Post}>
          <ReactMarkdown source={props.post.content} />
        </article>
      </Section>
    </>
  );
};

export async function getStaticProps({params}) {
  const post: TPost = getPostBySlug('blog', params.slug, [
    'title',
    'slug',
    'content',
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts: TPost[] = getAllPosts('blog', ['slug']);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
