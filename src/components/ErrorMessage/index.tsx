import React from 'react';

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div data-testid="error-message">
      <strong>{message}</strong>
    </div>
  );
};

export default ErrorMessage;
