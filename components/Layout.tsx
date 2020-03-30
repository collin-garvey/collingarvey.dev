import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
