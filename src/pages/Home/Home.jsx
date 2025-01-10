import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  return (
    <div>
      <div className="home" id="home">
        <div className="video-container">
          <video
            src="https://videos.pexels.com/video-files/5818973/5818973-uhd_2560_1440_24fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        <img src="https://i.ibb.co/G9Pjm8x/WE-logo.png" alt="WE-logo" />
        <p>Make your student life more saturated</p>
        <button>
          <Link to="/SDU-events/events">Join us!</Link>
        </button>
      </div>

      <div className="container" id="rulesofgame">
        <div className="sticky-left">
          <h1>
            How to <br />
            register?
          </h1>

          <div className="item">
            <span className="number">
              <p>2</p>
            </span>
            <p className="scnd-p">
              <strong>Choose an Event</strong>
              <br />
              Pick an event that interests you and matches your schedule.
            </p>
            <div className="thunder-dividerr"></div>
          </div>
        </div>
        <div className="scrollable-right">
          <div className="content">
            <div className="thunder-divider"></div>
            <div className="item">
              <span className="number">
                <p>1</p>
              </span>
              <p className="scnd-p">
                <strong>Visit the Events Page</strong> <br />
                Open the events page to explore the list of events available for
                registration.
              </p>
            </div>

            <div className="item">
              <span className="number">
                <p>3</p>
              </span>
              <p className="scnd-p">
                <strong>Complete Registration!</strong> <br />
                Fill out the registration form with accurate details and confirm
                your participation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats">
        <h2>Our Impact</h2>
        <div className="stats-container">
          <div className="stat-item">
            <h3>100+</h3>
            <p>Events Hosted</p>
          </div>
          <div className="stat-item">
            <h3>5,000+</h3>
            <p>Happy Students</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Networking Opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
