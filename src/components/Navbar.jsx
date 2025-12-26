import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const isJoinPage = window.location.pathname === "/join";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="OBC Logo" className="logo" />
      </div>

      <div className="navbar-right">
        {isJoinPage ? (
          <a href="/">Home</a>
        ) : (
          <a href="#home">Home</a>
        )}
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
        <a href="/join" className="join-btn">Join Us</a>
      </div>
    </nav>
  );
}

export default Navbar;
