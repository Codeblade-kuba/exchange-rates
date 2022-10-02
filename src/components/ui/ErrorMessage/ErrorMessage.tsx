const ErrorMessage = ({ message }: { message: string }): JSX.Element => {
  return (
    <h2 className="alert" data-testid="error-message">
      {message}
    </h2>
  );
};

export default ErrorMessage;
