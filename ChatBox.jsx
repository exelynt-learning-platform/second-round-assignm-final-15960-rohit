import { useSelector } from "react-redux";
import Message from "./Message";
import InputBox from "./inputBox";
import Loader from "./Loader";
import { useEffect, useRef } from "react";

const ChatBox = () => {
  const { messages, loading, error } = useSelector((state) => state.chat);

  const bottomRef = useRef(null);

  // ✅ Auto scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="chat-container">
      {/* Messages Area */}
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="empty-chat">
            💬 Start conversation...
          </div>
        )}

        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}

        {/* Loader */}
        {loading && <Loader />}

        {/* Error message */}
        {error && (
          <div className="error">
            ⚠️ {error}
          </div>
        )}

        {/* Auto scroll anchor */}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <InputBox />
    </div>
  );
};

export default ChatBox;