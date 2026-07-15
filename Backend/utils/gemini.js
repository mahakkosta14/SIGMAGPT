import "dotenv/config";

const getGeminiAPIResponse = async(message) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { parts: [{ text: message }] }
          ]
        }),
      }
    );

    const data = await response.json();

    // Safely extract the text response
    const output = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
    return output;
  } catch (err) {
    console.error(err);
    res.status(500).send("Error calling Gemini API");
  }  
}

export default getGeminiAPIResponse;