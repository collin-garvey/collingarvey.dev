import Layout from './../components/Layout';
import Project from '../components/ProjectCard';
import Grid from '../components/Grid';

import styles from './../styles/Index.module.css';

const Index: React.FC = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <Grid columns={1}>
          <h2>It's just websites</h2>
        </Grid>
      </section>
      <section className="section--light">
        <Grid columns={3}>
          <Project
            url="https://facebook.com/"
            title="Facebook Connectivity App"
          />
          <Project
            url="https://transparency.facebook.com/"
            title="Facebook Transparency"
          />
          <Project url="https://www.oculus.com/medium/" title="Oculus Medium" />
          <Project
            url="https://politics.facebook.com/"
            title="Facebook Government Politics &amp; Advocacy"
          />
        </Grid>
      </section>
    </Layout>
  );
};

export default Index;
