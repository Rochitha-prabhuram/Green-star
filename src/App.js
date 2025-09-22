import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./IMG_3773.JPG";

import Welcome from "./Screens/Welcome";
import BookEvents from "./Screens/Book-events";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="LOGO" />
        <p>WELCOME TO GREEN STAR EVENTS💚!</p>
        <nav>
          <Link to="/welcome">Home</Link> |{" "}
          <Link to="/book-events">Book Events</Link> |{" "}

        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          
          <Route path="/book-events" element={<BookEvents />} />
          
        </Routes>
      </main>
    </div>
  );
}

export default App;
