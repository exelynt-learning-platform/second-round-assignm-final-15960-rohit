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
  },
});

export const { addUserMessage, addAIMessage, setLoading, setError } =
  chatSlice.actions;

// Async Thunk 
export const sendMessage = (message) => async (dispatch) => {
  try {
    // 1. Add user message
    dispatch(addUserMessage(message));

    // 2. Start loading
    dispatch(setLoading(true));

    // 3. Clear previous error
    dispatch(setError(null));

    // 4. Call API (mock)
    const response = await fetchAIResponse(message);

    // 5. Add AI response
    dispatch(addAIMessage(response));
  } catch (error) {
    

    // Show error as AI message 
    dispatch(
      addAIMessage(" Failed to get response. Please try again.")
    );

    // Store error safely
    dispatch(setError(error?.message || "Network error"));
  } finally {
    // 6. Stop loading
    dispatch(setLoading(false));
  }
};

export default chatSlice.reducer;