import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <h3>Contact Information</h3>

          <p><strong>Phone:</strong> +91-1234567890</p>
          <p><strong>Email:</strong> contact@obccommunity.org</p>

          <div className="socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
              aria-label="Instagram"
            >
              i
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
              aria-label="Twitter"
            >
              x
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">
          <h3>Office Address</h3>
          <p>
            OBC Rann Sangram Office<br />
            Main Road, Example Area<br />
            Pune, Maharashtra – 411001
          </p>

          <a
            href="https://www.google.com/maps?q=Pune+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="map-box"
          >
            <span>View on Google Maps</span>
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} OBC Rann Sangram. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
