import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Take a part in our events</h1>
          <p>
            Join us for amazing events that bring people together, inspire
            creativity, and create unforgettable memories. Stay updated with all
            our upcoming events and register today!
          </p>
          <Link to="/events" className="cta-button">
            Explore Events
          </Link>
        </div>
      </header>

      <section className="about-us">
        <h2>About Us</h2>
        <div className="about-us-content">
          <img
            src="https://i.pinimg.com/736x/64/bf/6a/64bf6a0754de7e611d898dbfa378da34.jpg"
            alt="About Us"
            className="about-us-image"
          />
          <p>
            Our mission is to provide a platform where people can connect,
            learn, and grow through a variety of engaging events. From workshops
            and seminars to fun social gatherings, we offer something for
            everyone.
          </p>
        </div>
      </section>

      <section className="featured-events">
        <h2>Featured Events</h2>
        <div className="events-list">
          <div className="event-item">
            <img
              src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Event 1"
              className="event-image"
            />
            <h3>Creative Coding Workshop</h3>
            <p>
              Join us for an interactive coding workshop where you'll learn how
              to bring your ideas to life through programming!
            </p>
          </div>
          <div className="event-item">
            <img
              src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Event 2"
              className="event-image"
            />
            <h3>Networking Mixer</h3>
            <p>
              Meet like-minded professionals and expand your network in a
              relaxed and friendly environment.
            </p>
          </div>
          <div className="event-item">
            <img
              src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Event 3"
              className="event-image"
            />
            <h3>Annual Tech Conference</h3>
            <p>
              Join industry experts for an in-depth look at the latest trends
              and innovations in technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;