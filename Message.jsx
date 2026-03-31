const Message = ({ message }) => {
  return (
    <div
      className={`message ${
        message.role === "user" ? "user" : "ai"
      }`}
    >
      {message.content}
    </div>
  );
};

export default Message;