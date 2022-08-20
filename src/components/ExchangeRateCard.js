import AddToFavorite from './AddToFavorite';

const ExchangeRateCard = (props) => {
  return (
    <div className={'exchange-rate-card ' + (props.favorite ? 'favorite' : '')}>
      <header>
        <AddToFavorite symbol={props.symbol} />
        <h4>{props.name}</h4>
      </header>
      <div>
        <div>
          <span>Symbol:</span>
          <b>{props.symbol}</b>
        </div>
        <div>
          <span>Rate:</span>
          <b>{props.rate}</b>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRateCard;
