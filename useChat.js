import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../features/chat/chatSlice";
import {
  selectMessages,
  selectLoading,
  selectError,
} from "../features/chat/chatSelectors";

const useChat = () => {
  const dispatch = useDispatch();

  const messages = useSelector(selectMessages);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const send = (text) => {
    dispatch(sendMessage(text));
  };

  return { messages, loading, error, send };
};

export default useChat;