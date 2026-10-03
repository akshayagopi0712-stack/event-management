import React from "react";

function EventDetails({ event, setPage }) {
  if (!event) {
    return (
      <div className="event-details">
        <h2>No Event Selected</h2>
        <button className="back-btn" onClick={() => setPage("events")}>
          ← Back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="event-details">
      <button className="back-btn" onClick={() => setPage("events")}>
        ← Back to Events
      </button>

      <h1 className="event-title">{event.title || "Food Fest"}</h1>

      <p><strong>Category:</strong> {event.category || "Cultural"}</p>
      <p><strong>Date:</strong> {event.date || "10-10-2026"}</p>
      <p><strong>Venue:</strong> {event.venue || "Food Court"}</p>
      <p><strong>Seats Available:</strong> {event.seats || 30}</p>

      <p className="event-desc">
        {event.description ||
          "This event is a great opportunity for students to learn, participate and gain experience."}
      </p>

      <button
        className="register-btn"
        onClick={() => setPage("registration")}
      >
        Register Now 🚀
      </button>
    </div>
  );
}

export default EventDetails;