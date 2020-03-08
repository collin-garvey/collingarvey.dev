import '../css/fonts.css';
import '../css/styles.css';

const MyApp = ({Component, pageProps, router}) => {
  return <Component {...pageProps} key={router.route} />;
};

export default MyApp;
