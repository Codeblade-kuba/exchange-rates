import logo from '../../assets/images/logo.svg';

const SiteLogo = (): JSX.Element => {
  return (
    <h1 className="main-header-title">
      <a href="/">
        <img
          className="main-header-logo"
          src={logo}
          alt="Logo of Exchange Rates"
          width="64"
          height="64"
        />
      </a>
    </h1>
  );
};

export default SiteLogo;
