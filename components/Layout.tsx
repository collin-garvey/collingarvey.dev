import Header from './Header';
import Footer from './Footer';

const Layout: React.SFC = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
