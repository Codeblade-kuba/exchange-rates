import { Helmet } from 'react-helmet';

import HeadProps from './types/HeadProps';

const Head = ({ title, description }: HeadProps): JSX.Element => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#299da1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    </>
  );
};

export default Head;
