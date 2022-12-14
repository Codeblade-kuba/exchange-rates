import Head from '../common/Head';
import ExchangeRatesApp from '../components/app/ExchangeRatesApp';
import Layout from '../layout/Layout';
import ExchangeRateCards from '../components/app/ExchangeRateCards';
import Background from '../components/ui/Background';

const Home = (): JSX.Element => {
  return (
    <>
      <Head
        title="Exchange Rates - Home"
        description="Simple web app to make tracking exchange rates nicer..."
      />
      <ExchangeRatesApp>
        <Layout>
          <ExchangeRateCards />
        </Layout>
      </ExchangeRatesApp>
      <Background />
    </>
  );
};

export default Home;
