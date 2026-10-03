import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Login from "./pages/Login";
import EventDetails from "./pages/EventDetails";
import Registration from "./pages/Registration";

function App() {
  const [page, setPage] = useState("home");
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div>
      <nav className="navbar">
        <h2>EventHub</h2>

        <div>
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("events")}>
            Events
          </button>

          <button onClick={() => setPage("about")}>
            About
          </button>

          <button onClick={() => setPage("login")}>
            Login
          </button>

          <button onClick={() => setPage("admin")}>
            Admin
          </button>
        </div>
      </nav>

      {page === "home" && (
        <Home setPage={setPage} />
      )}

      {page === "events" && (
        <Events
          setPage={setPage}
          setSelectedEvent={setSelectedEvent}
        />
      )}

      {page === "eventDetails" && (
        <EventDetails
          event={selectedEvent}
          setPage={setPage}
        />
      )}

      {page === "registration" && (
        <Registration
          event={selectedEvent}
          setPage={setPage}
        />
      )}

      {page === "about" && (
        <About setPage={setPage} />
      )}

      {page === "login" && (
        <Login setPage={setPage} />
      )}

      {page === "admin" && (
        <Admin />
      )}
    </div>
  );
}

export default App;