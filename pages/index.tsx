import Project from '../components/ProjectCard';
import Grid from '../components/Grid';
import styles from './../styles/Index.module.css';

const Index: React.FC = () => {
  return (
    <>
      <section className={styles.hero}>
        <Grid columns={1}>
          <div className={styles.heroContent}>
            <h2>
              <img
                className={styles.headshot}
                src="/static/images/headshot.jpg"
                alt="Colliente"
              />
              I'm Collin Garvey, a Front-End Engineer, Manager, and soccer fan
              based in Orlando, FL
            </h2>
          </div>
        </Grid>
      </section>
      <section>
        <h3>My Work</h3>
        <Grid columns={1}>
          <p className={styles.intro}>
            I've built neat things for{' '}
            <a href="https://oculus.com" target="_blank">
              Oculus VR
            </a>
            ,{' '}
            <a href="https://facebook.com" target="_blank">
              (the) Facebook
            </a>
            , and{' '}
            <a href="https://prpl.rs" target="_blank">
              Purple Rock Scissors
            </a>{' '}
            where I previously served as Development Manager. I've done pretty
            much everything web related over my 12 years of experinece, but I
            enjoy front-end development the most. I'm really into React and
            isomorphic JS, in general. I also dabble in{' '}
            <a href="https://codepen.io/collin-garvey">creative coding</a> when
            I'm feeling spicy.
          </p>
        </Grid>
        <Grid columns={3}>
          <Project url="https://www.oculus.com/medium/" title="Oculus Medium" />
          <Project
            url="https://facebook.com/"
            title="Facebook Connectivity App"
          />
          <Project
            url="https://transparency.facebook.com/"
            title="Facebook Transparency"
          />
          {/* <Project
            url="https://politics.facebook.com/"
            title="Facebook Government Politics &amp; Advocacy"
          /> */}
        </Grid>
      </section>
      <section>
        <div>
          <p>I've recently started a blog. Have some reads:</p>
          <h3>Blog Posts</h3>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Index;
