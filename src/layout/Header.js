import Container from './Container';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <Container>
        <h1>Exchange Rate App</h1>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
