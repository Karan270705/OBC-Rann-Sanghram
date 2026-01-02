import { useState } from "react";
import "./Join.css";
import stateDistrictData from "../pages/stateDistrictData";
import joinBgVideo from "../assets/bg-vid.mp4";

function Join() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    district: "",
    taluka: "",
    village: "",
    pincode: ""
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

  const handleStateChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      state: e.target.value,
      district: ""
    }));
  };

  const errors = {
    name: formData.name.trim() === "" ? "Full name is required" : "",
    phone:
      formData.phone.length !== 10 ? "Enter valid 10-digit mobile number" : "",
    state: formData.state === "" ? "State is required" : "",
    district: formData.district === "" ? "District is required" : "",
    taluka: formData.taluka.trim() === "" ? "Taluka is required" : "",
    village: formData.village.trim() === "" ? "Village is required" : "",
    pincode:
      formData.pincode.length !== 6 ? "Enter valid 6-digit pincode" : ""
  };

  const isFormValid = Object.values(errors).every((err) => err === "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Submitted:", formData);
  };

  return (
    <section className="join-section">
      {/* VIDEO BACKGROUND */}
      <video
        className="join-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={joinBgVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="join-overlay"></div>

      {/* FORM CARD */}
      <div className="join-container">
        <h2 className="join-title">Registration</h2>

        <form className="join-form" onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="field">
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
          <div className="field">
            <label>Mobile / WhatsApp Number *</label>
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

          {/* STATE */}
          <div className="field">
            <label>State *</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleStateChange}
              onBlur={handleBlur}
              className={touched.state && errors.state ? "error" : ""}
            >
              <option value="">Select State</option>
              {Object.keys(stateDistrictData).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {touched.state && errors.state && (
              <span className="error-text">{errors.state}</span>
            )}
          </div>

          {/* DISTRICT */}
          <div className="field">
            <label>District *</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={!formData.state}
              className={touched.district && errors.district ? "error" : ""}
            >
              <option value="">Select District</option>
              {formData.state &&
                stateDistrictData[formData.state].map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
            </select>
            {touched.district && errors.district && (
              <span className="error-text">{errors.district}</span>
            )}
          </div>

          {/* TALUKA */}
          <div className="field">
            <label>Taluka *</label>
            <input
              name="taluka"
              value={formData.taluka}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.taluka && errors.taluka ? "error" : ""}
            />
            {touched.taluka && errors.taluka && (
              <span className="error-text">{errors.taluka}</span>
            )}
          </div>

          {/* VILLAGE */}
          <div className="field">
            <label>Village *</label>
            <input
              name="village"
              value={formData.village}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.village && errors.village ? "error" : ""}
            />
            {touched.village && errors.village && (
              <span className="error-text">{errors.village}</span>
            )}
          </div>

          {/* PINCODE */}
          <div className="field">
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

          <button
            type="submit"
            className="submit-btn"
            disabled={!isFormValid}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}

export default Join;