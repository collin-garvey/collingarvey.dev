import fs from 'fs';
import matter from 'gray-matter';
import {join} from 'path';

export type TPostType = 'blog' | 'work';

export type TPost = {
  title: string;
  date?: string;
  slug: string;
  mainImage?: string;
  featuredBlurb?: string;
  tags?: [string];
  content?: string;
};

export type TWorkPost = TPost & {
  type?: string;
  images?: [string];
  liveURL?: string;
};

export function getPostsPath(postType: TPostType): string {
  let folder: string;

  switch (postType) {
    case 'work':
      folder = '_work';
      break;

    default:
      folder = '_posts';
      break;
  }
  return join(process.cwd(), folder);
}

export function getPostSlugs(postType: TPostType) {
  return fs.readdirSync(getPostsPath(postType));
}

export function getPostBySlug(postType: TPostType, slug: string, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(getPostsPath(postType), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {data, content} = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(postType: TPostType, fields = []) {
  const slugs = getPostSlugs(postType);
  return slugs.map(slug => getPostBySlug(postType, slug, fields));
}
