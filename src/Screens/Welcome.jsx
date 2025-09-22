import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Welcome to Green Star Events</h1>
      <p>Plan your events, book venues and manage guests.</p>

      {/* Link navigation */}
      <p>
        <Link to="/login" className="link-button">Go to Login</Link>
      </p>

      {/* Button navigation */}
      <button onClick={() => navigate("/login")} className="primary-btn">
        Go to Login
      </button>
    </div>
  );
}

<Route path="/" element={<Welcome />} />