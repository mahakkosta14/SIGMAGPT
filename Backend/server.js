import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});

const connectDB = async() =>{
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database!");
  } catch(err) {
    console.log("Failed to connect with Db", err);
  }
}

// app.post("/test", async (req, res) => {
//   try {
//     const response = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           contents: [
//             { parts: [{ text: req.body.message }] }
//           ]
//         }),
//       }
//     );

//     const data = await response.json();

//     // Safely extract the text response
//     const output = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
//     res.send(output);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error calling Gemini API");
//   }
// });

