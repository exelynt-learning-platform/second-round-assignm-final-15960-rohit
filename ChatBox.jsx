import { useSelector } from "react-redux";
import Message from "./Message";
import InputBox from "./InputBox";
import Loader from "./Loader";

const ChatBox = () => {
  const { messages, loading } = useSelector((state) => state.chat);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}

        {loading && <Loader />}
      </div>

      <InputBox />
    </div>
  );
};

export default ChatBox;