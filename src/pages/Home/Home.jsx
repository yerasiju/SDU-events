import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="video-background">
          <video
            src="https://videos.pexels.com/video-files/9686491/9686491-hd_1920_1080_30fps.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="video-overlay"></div>
        <div className="hero-content">
          <h2>Hurry Up! Don't waste time!</h2>
          <h1>Take part in our events</h1>
          <Link to="/SDU-events/events" className="cta-button">
            Explore Events
          </Link>
        </div>
      </header>

      <section class="about-us-section">
        <div class="about-header">
          <h2>About Us</h2>
          <p>
            WE is the heart of student life in Suleyman Demirel University
            (SDU), Social Life of E&NS Faculty. Since 2021, we’ve worked to make
            student life more vibrant and engaging.
          </p>
        </div>

        <div class="about-content">
          <div class="about-row">
            <div class="text-content">
              <h3>Our Mission: Empowering Students</h3>
              <p>
                At WE, our mission is to enhance the student experience by
                organizing impactful events that inspire, educate, and connect
                the SDU community. Through innovation and teamwork, we aim to
                make every moment unforgettable.
              </p>
            </div>
            <img
              src="https://sdu.edu.kz/wp-content/uploads/2023/04/o-nas.webp"
              alt="Our Team"
              class="about-image"
            />
          </div>

          <div class="about-row reverse">
            <img
              src="https://scontent.fcit2-1.fna.fbcdn.net/v/t39.30808-6/462606791_2793092950867777_2270908401936671287_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=xbXHEUOk_80Q7kNvgEPox9z&_nc_zt=23&_nc_ht=scontent.fcit2-1.fna&_nc_gid=A403eXA0JSbLrNMFrduajTI&oh=00_AYBRUP_bhCwtl8Hcglw_FGatpLSxgjTfx1tN2EovWaRc0w&oe=676DDB66"
              alt="Our Workspace"
              class="about-image"
            />
            <div class="text-content">
              <h3>Our Story: Est. 2021</h3>
              <p>
                WE was founded in 2021 with the vision of creating a vibrant,
                inclusive student life for everyone at SDU. Since then, we’ve
                organized over 100 events, from cultural celebrations to
                academic workshops, bringing students closer together and making
                memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>

        <div class="about-stats">
          <div class="stat">
            <h3>100+</h3>
            <p>Events Organized</p>
          </div>
          <div class="stat">
            <h3>2021</h3>
            <p>Established</p>
          </div>
          <div class="stat">
            <h3>One Goal</h3>
            <p>To Make Student Life Richer</p>
          </div>
        </div>
      </section>

      <section className="featured-experiences">
        <h2>Unforgettable Experiences Await</h2>
        <div className="experience-cards">
          {[
            {
              title: "Exclusive Events",
              description:
                "Join our special themed events and make lasting memories!",
              imgSrc:
                "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
              link: "/SDU-events/exclusive",
            },
            {
              title: "Cultural Showcases",
              description:
                "Experience the diverse cultures through exciting performances.",
              imgSrc:
                "https://images.pexels.com/photos/1407491/pexels-photo-1407491.jpeg?auto=compress&cs=tinysrgb&w=600",
              link: "/SDU-events/cultural",
            },
            {
              title: "Student Networking",
              description:
                "Connect with students from all backgrounds and fields.",
              imgSrc:
                "https://images.pexels.com/photos/2072168/pexels-photo-2072168.jpeg?auto=compress&cs=tinysrgb&w=600",
              link: "/SDU-events/networking",
            },
          ].map((experience, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-image">
                <img
                  src={experience.imgSrc}
                  alt={experience.title}
                  className="experience-img"
                />
              </div>
              <div className="experience-text">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <Link to="/SDU-events/events" className="cta-button">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
