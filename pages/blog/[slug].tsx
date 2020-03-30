import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {getPostBySlug, getAllPosts} from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from './../../lib/markdownToHtml';

export default function Post({post, morePosts, preview}) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <article>
      <span>{post.author}</span>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

export async function getStaticProps({params}) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'author',
    'content',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
