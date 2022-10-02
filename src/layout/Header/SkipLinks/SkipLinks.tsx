import skipLinksData from './data/SkipLinksData';

const SkipLinks = (): JSX.Element => {
  return (
    <div className="skip-links">
      {skipLinksData.map((skipLink) => {
        return (
          <a className="skip-link" href={'#' + skipLink.id}>
            Skip to {skipLink.name}
          </a>
        );
      })}
    </div>
  );
};

export default SkipLinks;
