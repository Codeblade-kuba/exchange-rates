import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Container from './Container';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <main>
        <Container>{children}</Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
