import './AllPages.css';
import { MyContext } from "./MyContext.jsx";
import { useContext } from "react";

export default function About() {
    const { setPage } = useContext(MyContext);
  return (
    <div className="page">
        <button className="closeBtn" onClick={() => setPage("chat")}>×</button>
      <h1>About SigmaGPT</h1>
      <p>
        SigmaGPT is an AI-powered assistant built with the MERN stack and Gemini API.
        It helps users with intelligent conversations, coding support, and more.
      </p>

      <p>
        Created by Mahak Kosta, 2026. Powered by React, Node.js, MongoDB, Express, and Gemini.
      </p>
    </div>
  );
}
