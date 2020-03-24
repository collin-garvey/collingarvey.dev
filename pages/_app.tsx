import '../styles/main.css';

const MyApp = ({Component, pageProps, router}) => {
  return <Component {...pageProps} key={router.route} />;
};

export default MyApp;
