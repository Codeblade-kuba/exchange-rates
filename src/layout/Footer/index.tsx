import React from 'react';

import './index.scss';
import Container from '../Container';
import { ReactComponent as HeartIcon } from '../../assets/icons/favorite.svg';

const Footer = () => {
  return (
    <footer className="main-footer">
      <Container>
        <p className="main-footer-wrapper">
          Created with <HeartIcon /> by&nbsp;
          <a href="https://codeblade.pl">Jakub Chmielewski</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
