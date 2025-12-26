import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Have a question about our community or need assistance? Fill the form below and we'll reach out to you!
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter phone number" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>State</label>
            <input type="text" placeholder="State" required />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="City" required />
          </div>

          <div className="form-group">
            <label>Pincode</label>
            <input type="text" placeholder="Pincode" required />
          </div>
        </div>

        <div className="form-group">
          <label>Your Query</label>
          <textarea
            rows="4"
            placeholder="Write your question or message here..."
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit Enquiry
        </button>
      </form>
    </section>
  );
}

export default Contact;
