import "./Home.css";

const HomePage = () => {
  return (
    <div>
      <div className="home" id="home">
        <img src="/public/WE-logo.png" alt="WE logo" />
        <p>make your student life more saturated</p>
        <button>
          <a href="/SDU-events/events">Join us</a>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
