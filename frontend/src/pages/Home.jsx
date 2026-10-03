function Home({ setPage }) {
  return (
    <div>
      <section className="hero">
        <h1>Discover Amazing Events</h1>

        <p>
          Find and register for upcoming college events.
        </p>

        <button
          className="explore-btn"
          onClick={() => setPage("events")}
        >
          Explore Events
        </button>
      </section>

      <section className="events">
        <h2>Upcoming Events</h2>

        <div className="event-list">
          <div className="home-card">
            <h3>Tech Fest 2026</h3>
            <p>Technical</p>
            <p>October 10, 2026</p>
          </div>

          <div className="home-card">
            <h3>Hackathon 2026</h3>
            <p>Technical</p>
            <p>October 15, 2026</p>
          </div>

          <div className="home-card">
            <h3>Web Development Workshop</h3>
            <p>Workshop</p>
            <p>October 20, 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;