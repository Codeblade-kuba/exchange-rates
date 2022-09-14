import { API_URL } from '../data/constants';

const buildAPIURL = (URI: string, relativeParam: string | null = null) => {
  let builtURL = API_URL + '/' + URI;
  if (relativeParam) {
    builtURL += '?from=' + relativeParam;
  }
  return builtURL;
};

export default buildAPIURL;
