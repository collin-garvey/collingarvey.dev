import '../styles/main.css';
import {PageTransition} from 'next-page-transitions';
import Layout from './../components/Layout';

const MyApp = ({Component, pageProps, router}) => {
  return (
    <Layout>
      <PageTransition timeout={300} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
    </Layout>
  );
};

export default MyApp;
