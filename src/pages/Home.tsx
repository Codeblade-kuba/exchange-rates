import Head from '../components/Head';
import ExchangeRatesApp from '../components/ExchangeRatesApp';
import Layout from '../layout/Layout';
import ExchangeRateCardsContainer from '../components/ExchangeRateCardsContainer';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Head
        title="Exchange Rates - Home"
        description="Simple web app to make tracking exchange rates nicer..."
      />
      <ExchangeRatesApp>
        <Layout>
          <ExchangeRateCardsContainer />
        </Layout>
      </ExchangeRatesApp>
    </>
  );
};

export default Home;
