// NOTE:
// Mock API used because frontend cannot securely call real AI APIs.

export const fetchAIResponse = async (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        candidates: [
          {
            content: {
              parts: [
                {
                  text: `🤖 AI Response: ${message}`,
                },
              ],
            },
          },
        ],
      });
    }, 800);
  }).then((data) => {
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response"
    );
  });
};