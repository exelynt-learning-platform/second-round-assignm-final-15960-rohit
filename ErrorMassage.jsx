const ErrorMessage = ({ error }) => {
  if (!error) return null; // 👈 prevent empty render

  return (
    <div className="error">
      {error}
    </div>
  );
};

export default ErrorMessage;