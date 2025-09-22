import React from "react";
import { BrowserRouter, Routes, Route, Link }
from "react-router-dom";
import "./App.css";
import logo from "./IMG_3773.JPG";

import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import Profile from "./Screens/Profile";
import BookEvents from "./Screens/Book-events";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="LOGO" />
          <p>WELCOME TO GREEN STAR EVENTS💚!</p>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/login">Login</Link> |{" "}
            <Link to="/book-events">Book Events</Link> |{" "}
            <Link to="/profile">Profile</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book-events" element={<BookEvents />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;