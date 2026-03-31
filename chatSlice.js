import { createSlice } from "@reduxjs/toolkit";
import { fetchAIResponse } from "../chat/chatAPI";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push({ role: "user", content: action.payload });
    },
    addAIMessage: (state, action) => {
      state.messages.push({ role: "ai", content: action.payload });
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addUserMessage, addAIMessage, setLoading, setError } =
  chatSlice.actions;

// async action
export const sendMessage = (message) => async (dispatch) => {
  try {
    dispatch(addUserMessage(message));
    dispatch(setLoading(true));
    dispatch(setError(null));

    const response = await fetchAIResponse(message);

    dispatch(addAIMessage(response));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default chatSlice.reducer;