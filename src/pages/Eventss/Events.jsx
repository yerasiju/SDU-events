import React, { useEffect, useState } from "react";
import { API_KEY, EVENTS_SHEET_ID, BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/${EVENTS_SHEET_ID}/values/Events?key=${API_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch events.");
      const data = await response.json();

      if (!data.values) throw new Error("No events found in the spreadsheet.");

      const formattedEvents = data.values.slice(1).map((row) => ({
        title: row[0] || "Exciting Event Coming Soon!",
        description: row[1] || "Join us for this amazing experience!",
        date: row[2] || "TBA",
        time: row[3] || "TBA",
        location: row[4] || "Location to be announced",
        image: row[5] || "https://via.placeholder.com/150",
      }));
      setEvents(formattedEvents);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleRegister = (eventName) => {
    navigate("/register", { state: { eventName } });
  };

  return (
    <div className="events-container">
      <header className="events-header">
        <h1 className="events-title">Explore Our Upcoming Events</h1>
        <p className="events-subtitle">
          Stay updated and join us for engaging workshops, talks, and more.
        </p>
      </header>

      {error && <p className="events-error">{error}</p>}

      <div className="eventss-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img
              src={event.image}
              alt={event.title}
              className="event-image"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150"; // Fallback image
              }}
            />
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              {event.description && (
                <p className="event-description">{event.description}</p>
              )}
              <p className="event-info">
                {event.date && <span>{event.date}</span>}
                {event.time && <span> | {event.time}</span>}
                {event.location && <span> | {event.location}</span>}
              </p>
              <button
                className="event-button"
                onClick={() => handleRegister(event.title)}
              >
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
