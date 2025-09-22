import { Link, useNavigate } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

function Welcome() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Green Star Events!</h1>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
}

export default Welcome;
