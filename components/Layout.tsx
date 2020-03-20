import Header from './Header';

const Layout: React.FC = props => {
  return (
    <>
      <Header />
      <main className="container container--grid">
        <div className="container__row">{props.children}</div>
      </main>
    </>
  );
};

export default Layout;
