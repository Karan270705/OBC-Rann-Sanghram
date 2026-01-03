import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    city: "",
    pincode: "",
    message: ""
  });

  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleNumericInput = (e, maxLength) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, maxLength);
    setFormData((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const errors = {
    name: formData.name.trim() === "" ? "Full name is required" : "",
    phone:
      formData.phone.length !== 10
        ? "Enter valid 10-digit phone number"
        : "",
    state: formData.state.trim() === "" ? "State is required" : "",
    city: formData.city.trim() === "" ? "City is required" : "",
    pincode:
      formData.pincode.length !== 6
        ? "Enter valid 6-digit pincode"
        : "",
    message:
      formData.message.trim().length < 10
        ? "Message must be at least 10 characters"
        : ""
  };

  const isFormValid = Object.values(errors).every((err) => err === "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    console.log("Contact enquiry submitted:", formData);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Have a question about our community or need assistance? Fill the form
        below and we’ll reach out to you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* NAME */}
        <div className="form-group">
          <label>Full Name *</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.name && errors.name ? "error" : ""}
          />
          {touched.name && errors.name && (
            <span className="error-text">{errors.name}</span>
          )}
        </div>

        {/* PHONE */}
        <div className="form-group">
          <label>Phone Number *</label>
          <input
            name="phone"
            inputMode="numeric"
            value={formData.phone}
            onChange={(e) => handleNumericInput(e, 10)}
            onBlur={handleBlur}
            className={touched.phone && errors.phone ? "error" : ""}
          />
          {touched.phone && errors.phone && (
            <span className="error-text">{errors.phone}</span>
          )}
        </div>

        {/* LOCATION ROW */}
        <div className="form-row">
          <div className="form-group">
            <label>State *</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.state && errors.state ? "error" : ""}
            />
            {touched.state && errors.state && (
              <span className="error-text">{errors.state}</span>
            )}
          </div>

          <div className="form-group">
            <label>City *</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.city && errors.city ? "error" : ""}
            />
            {touched.city && errors.city && (
              <span className="error-text">{errors.city}</span>
            )}
          </div>

          <div className="form-group">
            <label>Pincode *</label>
            <input
              name="pincode"
              inputMode="numeric"
              value={formData.pincode}
              onChange={(e) => handleNumericInput(e, 6)}
              onBlur={handleBlur}
              className={touched.pincode && errors.pincode ? "error" : ""}
            />
            {touched.pincode && errors.pincode && (
              <span className="error-text">{errors.pincode}</span>
            )}
          </div>
        </div>

        {/* MESSAGE */}
        <div className="form-group">
          <label>Your Query *</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={touched.message && errors.message ? "error" : ""}
          />
          {touched.message && errors.message && (
            <span className="error-text">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={!isFormValid}
        >
          Submit Enquiry
        </button>
      </form>
    </section>
  );
}

export default Contact;