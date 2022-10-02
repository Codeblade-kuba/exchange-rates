import Header from '../Header';
import Footer from '../Footer';
import Container from '../../components/ui/Container';

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <div className="main-wrapper">
      <Header />
      <main id="site-content" className="main">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
