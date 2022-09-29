import './index.scss';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default Container;
