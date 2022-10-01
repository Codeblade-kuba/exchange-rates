import { Helmet } from 'react-helmet';

import './styles/index.scss';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Exchange Rates</title>
        <meta
          name="description"
          content="Simple web app to make tracking exchange rates nicer..."
        />
        <meta name="theme-color" content="#299da1" />
      </Helmet>
      <Home />
    </>
  );
};

export default App;
