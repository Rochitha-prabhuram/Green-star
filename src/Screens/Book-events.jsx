import React from "react";
import { Link } from "react-router-dom";

export default function BookEvents() {
  return (
    <div className="page-container">
      <h1>🎉 Book Events</h1>
      <p>This is the Book Events page.</p>
      <p><Link to="/profile">Go to Profile</Link></p>
      <p><Link to="/">Back to Welcome</Link></p>
    </div>
  );
}
