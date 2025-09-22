import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BookEvents() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile"); // programmatic navigation
  };

  const goToWelcome = () => {
    navigate("/"); // programmatic navigation
  };

  return (
    <div className="page-container">
      <h1>🎉 Book Events</h1>
      <p>This is the Book Events page.</p>

      {/* Programmatic navigation buttons */}
      <button onClick={goToProfile} style={{ marginRight: "10px" }}>
        Go to Profile
      </button>
      <button onClick={goToWelcome}>
        Back to Welcome
      </button>

      <hr style={{ margin: "20px 0" }} />
    </div>
  );
}
