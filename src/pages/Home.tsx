import React from 'react';

import ExchangeRatesApp from '../components/ExchangeRatesApp';
import Layout from '../layout/Layout';
import ExchangeRateCardsContainer from '../components/ExchangeRateCardsContainer';

const Home = () => {
  return (
    <ExchangeRatesApp>
      <Layout>
        <ExchangeRateCardsContainer />
      </Layout>
    </ExchangeRatesApp>
  );
};

export default Home;
