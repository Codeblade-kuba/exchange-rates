import Header from '../layout/Header';
import Footer from './Footer';
import Container from './Container';

const Layout = (props) => {
  return (
    <>
      <Header></Header>
      <main>
        <Container>{props.children}</Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
