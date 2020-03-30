import React from 'react';
import Link from 'next/link';

interface IPostLinkProps {
  slug: string;
}

const PostLink: React.FC<IPostLinkProps> = props => {
  return (
    <Link href="/blog/[slug]" as={`/blog/${props.slug}`}>
      <a>{props.slug}</a>
    </Link>
  );
};

const Blog: React.FC = () => {
  return (
    <>
      <h2>Blog</h2>
      <ul>
        <PostLink slug="Hello" />
      </ul>
    </>
  );
};

export default Blog;
