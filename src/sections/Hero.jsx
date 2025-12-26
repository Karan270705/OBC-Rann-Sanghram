import heroBg from "../assets/obc.png";
import logo from "../assets/logo.png";
import "./Hero.css";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-inner">
          
          {/* LEFT: Text */}
          <div className="hero-content">
            <h1>Welcome to OBC Rann Sangram Platform</h1>
            <p>
              A platform dedicated to empowerment, unity, and upliftment of the
              OBC community through awareness and collective action.
            </p>
          </div>

          {/* RIGHT: Logo */}
          <div className="hero-logo">
            <img src={logo} alt="OBC Logo" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
