import matter from 'gray-matter';

function convertKeyToSlug(key: string): string {
  return key
    .replace(/^.*[\\\/]/, '')
    .split('.')
    .slice(0, -1)
    .join('.');
}

export async function getWorkBySlug(slug: string) {
  const workPost = await import(`../_work/${slug}.md`);
  const data = matter(workPost.default);

  return {
    frontmatter: data.data,
    markdown: data.content,
  };
}

export async function getAllWork() {
  const work = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      const slug = convertKeyToSlug(key);
      const value: any = values[index];
      const document = matter(value.default);

      return {
        document,
        slug,
      };
    });

    return data;
  })(require.context('../_work', true, /\.md$/));

  return work;
}
