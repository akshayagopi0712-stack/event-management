import { useState } from "react";

function Registration({ event, setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  const registerEvent = () => {
    if (!name || !email || !phone) {
      alert("Please fill all the fields.");
      return;
    }

    fetch("http://localhost:5000/api/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eventId: event._id,
        eventTitle: event.title,
        name: name,
        email: email,
        phone: phone
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setMessage("Registration successful!");

        setName("");
        setEmail("");
        setPhone("");
      })
      .catch((error) => {
        console.log("Registration error:", error);
        alert("Registration failed.");
      });
  };

  return (
    <div className="registration-page">
      <button onClick={() => setPage("eventDetails")}>
        ← Back to Event
      </button>

      <h1>Event Registration</h1>

      <h2>{event.title}</h2>

      <p>📅 {event.date}</p>
      <p>📍 {event.venue}</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={registerEvent}>
        Submit Registration
      </button>

      {message && (
        <div className="success-message">
          ✓ {message}
        </div>
      )}
    </div>
  );
}

export default Registration;