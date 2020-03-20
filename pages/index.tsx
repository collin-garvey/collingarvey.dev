import styles from './../css/Index.module.css';
import Layout from './../components/Layout';

const Index: React.FC = () => {
  return (
    <Layout>
      <ul className={styles.intro}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam numquam
          quidem itaque, omnis possimus ab rerum sit doloremque et reiciendis!
          Ducimus, est! Animi mollitia deleniti ipsa quod, quidem vero pariatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam numquam
          quidem itaque, omnis possimus ab rerum sit doloremque et reiciendis!
          Ducimus, est! Animi mollitia deleniti ipsa quod, quidem vero pariatur!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam numquam
          quidem itaque, omnis possimus ab rerum sit doloremque et reiciendis!
          Ducimus, est! Animi mollitia deleniti ipsa quod, quidem vero pariatur!
        </p>
      </ul>
    </Layout>
  );
};

export default Index;
