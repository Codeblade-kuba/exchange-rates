import { API_URL } from '../../../data/constants';

const buildAPIURL = (URI, relativeParam = null) => {
  let builtURL = API_URL + '/' + URI;
  if (relativeParam) {
    builtURL += '?from=' + relativeParam;
  }
  return builtURL;
};

export default buildAPIURL;
