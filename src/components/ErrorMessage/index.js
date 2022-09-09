const ErrorMessage = ({ message }) => {
  return (
    <div data-testid="error-message">
      <strong>{message}</strong>
    </div>
  );
};

export default ErrorMessage;
