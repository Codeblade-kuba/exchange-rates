import logo from '../../../assets/images/logo.svg';

const Logo = (): JSX.Element => {
  return (
    <div className="logo">
      <h1 className="logo__heading">
        <a className="logo__link" href="/">
          <img
            className="logo__image"
            src={logo}
            alt="Logo of Exchange Rates"
            width="64"
            height="64"
          />
        </a>
      </h1>
    </div>
  );
};

export default Logo;
