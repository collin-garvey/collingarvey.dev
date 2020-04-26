import FsLightbox from 'fslightbox-react';
import {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import CTASection from '../../components/CTASection';
import ExternalLink from '../../components/ExternalLink';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import {TagList} from '../../components/TagList';
import config from '../../data/config.js';
import {getAllPosts, getPostBySlug, TWorkPost} from '../../lib/api';
import styles from '../../styles/WorkPost.module.css';

export default function Post({post}) {
  const carouselImages = post.images.map((path: string) => {
    return `${config.imagesPath}${path}`;
  });

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(index: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index,
    });
  }

  return (
    <>
      <Hero imagePath={`${config.imagesPath}${post.mainImage}`}>
        <h1>{post.title}</h1>
      </Hero>
      <Section width="wide">
        <article className={styles.WorkPost}>
          <div className={styles.sidebar}>
            <h3>Project Type</h3>
            <TagList tags={[post.type]} />
            <h3>Technologies</h3>
            <TagList tags={post.tags} />
            {post.liveUrl && (
              <div>
                <h3>Live URL</h3>
                <p>
                  <ExternalLink href={post.liveUrl}>
                    {post.liveUrl}
                  </ExternalLink>
                </p>
              </div>
            )}
            <div>
              <div className={styles.imageGrid}>
                {carouselImages.map((imgSrc: string, index: number) => {
                  return (
                    <a
                      key={index}
                      onClick={() => openLightboxOnSlide(index + 1)}
                    >
                      <img src={imgSrc} />
                    </a>
                  );
                })}
              </div>
              <button
                className="button"
                onClick={() =>
                  setLightboxController({
                    toggler: !lightboxController.toggler,
                    slide: 1,
                  })
                }
              >
                View Gallery
              </button>

              <FsLightbox
                toggler={lightboxController.toggler}
                sources={carouselImages}
                type="image"
                slide={lightboxController.slide}
              />
            </div>
          </div>
          <div className={styles.postContent}>
            <ReactMarkdown source={post.content} className={styles.markdown} />
          </div>
        </article>
      </Section>
      <CTASection />
    </>
  );
}

export async function getStaticProps({params}) {
  const post: TWorkPost = getPostBySlug('work', params.slug, [
    'title',
    'slug',
    'date',
    'content',
    'mainImage',
    'featuredBlurb',
    'liveUrl',
    'images',
    'tags',
    'type',
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
  const posts: TWorkPost[] = getAllPosts('work', ['slug']);

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
