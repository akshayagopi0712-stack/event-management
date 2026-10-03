import { useState, useEffect } from "react";

function Events({ setPage, setSelectedEvent }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.log("Error fetching events:", error);
      });
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>

      <p>Find and register for upcoming college events.</p>

      <div className="filters">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Technical">Technical</option>
          <option value="Workshop">Workshop</option>
          <option value="Cultural">Cultural</option>
        </select>
      </div>

      <div className="event-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="event-card" key={event._id}>
              <h3>{event.title}</h3>

              <p>Category: {event.category}</p>
              <p>📅 {event.date}</p>
              <p>📍 {event.venue}</p>
              <p>Seats Available: {event.seats}</p>

              <button
                onClick={() => {
                  setSelectedEvent(event);
                  setPage("eventDetails");
                }}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
}

export default Events;