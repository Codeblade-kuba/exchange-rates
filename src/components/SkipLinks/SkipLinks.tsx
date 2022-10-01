const SkipLinks = (): JSX.Element => {
  return (
    <div className="skip-links">
      <a className="skip-link" href="#content">
        Go to content
      </a>
      <a className="skip-link" href="#footer">
        Go to footer
      </a>
    </div>
  );
};

export default SkipLinks;
