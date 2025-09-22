import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Welcome to Green Star Events!</h1>
    </div>
  );
}

export default Welcome;

<Route path="/" element={<Welcome />} />