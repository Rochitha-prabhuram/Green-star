import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="page-container">
      <h1>👤 Profile</h1>
      <p>User profile page.</p>
      <p><Link to="/book-events">Go to Book Events</Link></p>
    </div>
  );
}
