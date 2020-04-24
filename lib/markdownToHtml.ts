import remark from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown: any) {
  const result = await remark()
    // TODO Figure this type issue out
    // @ts-ignore
    .use(html)
    .process(markdown);
  return result.toString();
}
