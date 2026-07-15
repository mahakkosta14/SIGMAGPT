import './AllPages.css';
import { MyContext } from "./MyContext";
import { useContext } from "react";

export default function Settings() {
    const { setPage } = useContext(MyContext);
  return (
    <div className="page">
        <button className="closeBtn" onClick={() => setPage("chat")}>×</button>

      <h1>Settings</h1>
      <p>Manage your SigmaGPT preferences here.</p>

      <ul>
        <li>Toggle Dark Mode</li>
        <li>Change Chat Font Size</li>
        <li>Clear Chat History</li>
      </ul>
    </div>
  );
}
