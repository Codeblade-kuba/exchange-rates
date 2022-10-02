import Container from '../../components/ui/Container';
import { ReactComponent as HeartIcon } from '../../assets/icons/favorite.svg';

const Footer = (): JSX.Element => {
  return (
    <footer id="site-footer" className="main-footer">
      <Container>
        <p className="main-footer__wrapper">
          Created with <HeartIcon /> by&nbsp;
          <a href="https://codeblade.pl">Jakub Chmielewski</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
