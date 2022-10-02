import Header from '../Header';
import Footer from '../Footer';
import Container from '../../components/ui/Container';

const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <div className="main-wrapper">
      <Header></Header>
      <main id="content">
        <Container>{children}</Container>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
