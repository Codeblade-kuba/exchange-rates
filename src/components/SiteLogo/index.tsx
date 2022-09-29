import logo from '../../assets/images/logo.svg';

const SiteLogo = () => {
  return (
    <h1 className="main-header-title">
      <a href="/">
        <img
          className="main-header-logo"
          src={logo}
          alt="Logo of Exchange Rates"
        />
      </a>
    </h1>
  );
};

export default SiteLogo;
