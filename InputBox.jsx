import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../features/chat/chatSlice";

const InputBox = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSend = () => {
    if (!input.trim()) return;

    dispatch(sendMessage(input));
    setInput("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        value={input}
        placeholder="Type a message..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default InputBox;