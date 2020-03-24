import Layout from './../components/Layout';
import Project from './../components/Project';

import styles from './../styles/Index.module.css';

const Index: React.FC = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className="container container--grid">
          <div className="container__row">
            <h2>It's just websites</h2>
          </div>
        </div>
      </section>
      <section className="section--light">
        <div className="container container--grid">
          <div className="container__row">
            <Project
              url="https://facebook.com/"
              title="Facebook Connectivity App"
            />
            <Project
              url="https://transparency.facebook.com/"
              title="Facebook Transparency"
            />
            <Project
              url="https://www.oculus.com/medium/"
              title="Oculus Medium"
            />
            <Project
              url="https://politics.facebook.com/"
              title="Facebook Government Politics &amp; Advocacy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
