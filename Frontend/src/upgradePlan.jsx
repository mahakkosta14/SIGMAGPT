import './AllPages.css';
import { MyContext } from "./MyContext";
import { useContext } from "react";

export default function UpgradePlan() {
    const { setPage } = useContext(MyContext);
  return (
    <div className="page">
    <button className="closeBtn" onClick={() => setPage("chat")}>×</button>
      <h1>Upgrade Plan</h1>
      <p>Choose the plan that suits you best.</p>

      <div className="plans">
        <div className="plan">
          <h2>Free</h2>
          <p>Basic chat features with Gemini API.</p>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p>Unlimited chats, priority responses, and advanced tools.</p>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
