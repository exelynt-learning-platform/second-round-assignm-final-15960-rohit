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
      state.messages.push({
        role: "user",
        content: action.payload,
        status: "sent", // optional for future use
      });
    },
    addAIMessage: (state, action) => {
      state.messages.push({
        role: "ai",
        content: action.payload,
      });
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { addUserMessage, addAIMessage, setLoading, setError, clearError } =
  chatSlice.actions;

// ✅ Async Thunk: sendMessage
export const sendMessage = (message) => async (dispatch) => {
  try {
    dispatch(addUserMessage(message));
    dispatch(setLoading(true));
    dispatch(clearError());

    const response = await fetchAIResponse(message);

    dispatch(addAIMessage(response));
  } catch (error) {
    // Only set error state, do NOT add AI message
    dispatch(setError(error?.message || "Failed to get response."));
  } finally {
    dispatch(setLoading(false));
  }
};

export default chatSlice.reducer;