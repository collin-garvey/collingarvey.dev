import Link from 'next/link';
import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import {getAllPosts, TPost} from '../lib/api';

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
        <h3>{title}</h3>
        <span>{date}</span>
      </a>
    </Link>
  );
};

interface IBlogProps {
  allBlogs: [TPost];
}

const Blog: React.SFC<IBlogProps> = props => {
  return (
    <>
      <Hero theme="short">
        <h1>Blog</h1>
      </Hero>
      <Section width="wide">
        <ul>
          {props.allBlogs.length &&
            props.allBlogs.map((post, key: number) => {
              return (
                <PostLink
                  key={key}
                  slug={post.slug}
                  title={post.title}
                  date={post.date}
                />
              );
            })}
        </ul>
      </Section>
    </>
  );
};

export async function getStaticProps() {
  const blogPosts = getAllPosts('blog', ['title', 'date', 'slug', 'content']);

  return {
    props: {
      allBlogs: blogPosts,
    },
  };
}

export default Blog;
