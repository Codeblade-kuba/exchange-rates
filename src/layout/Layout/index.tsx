import './index.scss';

import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
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
