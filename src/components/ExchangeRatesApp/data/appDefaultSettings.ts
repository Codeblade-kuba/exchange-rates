import AppStateInterface from '../interfaces/AppState';

const appDefaultSettings: AppStateInterface = {
  exchangeRelativeParam: 'EUR',
  exchangeDateParam: new Date(),
  favorites: [],
  decimalPlaces: 5,
  sortingMethod: 'default',
  showFavorites: false,
  reset: false,
};

export default appDefaultSettings;
