import ExchangeRatesApp from '../components/ExchangeRatesApp';
import Layout from '../layout/Layout';
import ExchangeRateCards from '../components/ExchangeRateCards';

const Home = () => {
  return (
    <ExchangeRatesApp>
      <Layout>
        <ExchangeRateCards></ExchangeRateCards>
      </Layout>
    </ExchangeRatesApp>
  );
};

export default Home;
