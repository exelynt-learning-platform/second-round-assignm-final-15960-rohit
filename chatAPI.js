// export const fetchAIResponse = async (message) => {
//   const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

//   const response = await fetch(
//     `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=${API_KEY}`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [{ text: message }],
//           },
//         ],
//       }),
//     }
//   );

//   const data = await response.json();

//   console.log("GEMINI RESPONSE:", data);

//   if (!response.ok) {
//     throw new Error(data?.error?.message || "API Error");
//   }

//   return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
// };


// This mock simulates API behavior for frontend-only assignment.

export const fetchAIResponse = async (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error("API Failed"));
      } else {
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
      }
    }, 1000);
  }).then((data) => {
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response"
    );
  });
};