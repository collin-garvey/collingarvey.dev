import React from 'react';
import {NextPageContext} from 'next';
import Link from 'next/link';
import matter from 'gray-matter';

interface IPostLinkProps {
  slug: string;
  title: string;
  date: string;
}

const PostLink: React.SFC<IPostLinkProps> = props => {
  const {slug, title, date} = props;
  return (
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <a>
        <h2>{title}</h2>
        <span>{date}</span>
      </a>
    </Link>
  );
};

const Blog = props => {
  return (
    <>
      <h2>Blog</h2>
      <ul>
        {props.allBlogs.length &&
          props.allBlogs.map((post, key: number) => {
            return (
              <PostLink
                key={key}
                slug={post.slug}
                title={post.document.data.title}
                date={post.document.data.date}
              />
            );
          })}
      </ul>
    </>
  );
};

Blog.getInitialProps = async () => {
  const siteConfig = await import('../data/config.json');
  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      const value: any = values[index];

      const document = matter(value.default);

      return {
        document,
        slug,
      };
    });

    return data;
  })(require.context('../_posts', true, /\.md$/));

  return {
    allBlogs: posts,
    ...siteConfig,
  };
};

export default Blog;
