function About({ setPage }) {
  return (
    <div className="about-page">
      <button onClick={() => setPage("home")}>
        ← Back to Home
      </button>

      <div className="about-content">
        <h1>About EventHub</h1>

        <p>
          EventHub is a simple college event management platform
          designed to help students discover and register for
          upcoming events in one place.
        </p>

        <p>
          Students can explore technical events, workshops and
          cultural programs, view event details and register
          easily using the online registration form.
        </p>

        <p>
          The platform also provides an admin section where
          organizers can add new events and view student
          registrations.
        </p>

        <div className="about-features">
          <div>
            <h3>🎓 Discover</h3>
            <p>Find upcoming college events easily.</p>
          </div>

          <div>
            <h3>📝 Register</h3>
            <p>Register for events with a simple form.</p>
          </div>

          <div>
            <h3>📊 Manage</h3>
            <p>Organizers can manage events and registrations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;