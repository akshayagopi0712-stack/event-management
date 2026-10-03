import { useEffect, useState } from "react";

function Admin() {
  const [registrations, setRegistrations] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Technical");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [seats, setSeats] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/registrations")
      .then((response) => response.json())
      .then((data) => {
        setRegistrations(data);
      })
      .catch((error) => {
        console.log("Error fetching registrations:", error);
      });
  }, []);

  const addEvent = () => {
    if (!title || !date || !venue || !seats) {
      alert("Please fill all the event fields.");
      return;
    }

    fetch("http://localhost:5000/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        category: category,
        date: date,
        venue: venue,
        seats: Number(seats)
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Event added successfully!");

        setTitle("");
        setCategory("Technical");
        setDate("");
        setVenue("");
        setSeats("");
      })
      .catch((error) => {
        console.log("Error adding event:", error);
        alert("Failed to add event.");
      });
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>

      <div className="add-event">
        <h2>Add New Event</h2>

        <input
          type="text"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Technical">Technical</option>
          <option value="Workshop">Workshop</option>
          <option value="Cultural">Cultural</option>
        </select>

        <input
          type="text"
          placeholder="Event date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />

        <input
          type="number"
          placeholder="Number of seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />

        <button onClick={addEvent}>Add Event</button>
      </div>

      <h2>Event Registrations</h2>

      {registrations.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {registrations.map((registration) => (
              <tr key={registration._id}>
                <td>{registration.eventTitle}</td>
                <td>{registration.name}</td>
                <td>{registration.email}</td>
                <td>{registration.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No registrations found.</p>
      )}
    </div>
  );
}

export default Admin;