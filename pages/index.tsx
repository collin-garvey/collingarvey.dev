import styles from './../styles/Index.module.scss';
import Layout from './../components/Layout';

const Index: React.FC = () => {
  return (
    <Layout>
      <section className="section--light">
        <div className="container">
          <p className={styles.intro}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            numquam quidem itaque, omnis possimus ab rerum sit doloremque et
            reiciendis! Ducimus, est! Animi mollitia deleniti ipsa quod, quidem
            vero pariatur!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            numquam quidem itaque, omnis possimus ab rerum sit doloremque et
            reiciendis! Ducimus, est! Animi mollitia deleniti ipsa quod, quidem
            vero pariatur!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            numquam quidem itaque, omnis possimus ab rerum sit doloremque et
            reiciendis! Ducimus, est! Animi mollitia deleniti ipsa quod, quidem
            vero pariatur!
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
