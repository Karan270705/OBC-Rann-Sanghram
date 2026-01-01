import { useEffect, useState } from "react";
import "./About.css";

import visionImage from "../assets/our_vision.jpeg";
import missionImage from "../assets/our_mission.jpeg";

const sections = [
  {
    sectionTitle: "Our Vision",
    card: {
      title: "Protect Constitutional Rights",
      image: visionImage,
      text:
        "Upholding the constitutional rights of the OBC community and ensuring justice, equality, and dignity for all."
    }
  },
  {
    sectionTitle: "Our Mission",
    card: {
      title: "Our Mission",
      image: missionImage,
      text:
        "To protect OBC rights and work with government and society for holistic development."
    }
  }
];

const objectives = [
  {
    title: "Protection of Constitutional & Reservation Rights",
    text:
      "To safeguard constitutional rights and educational and employment reservations granted to the OBC community."
  },
  {
    title: "Community Organization and Justice Advocacy",
    text:
      "To organize OBC groups and fight social, economic, and cultural injustice."
  },
  {
    title: "Educational and Skill Development Support",
    text:
      "To provide scholarships, hostels, skill development, and career guidance."
  },
  {
    title: "Economic Empowerment and Entrepreneurship",
    text:
      "To promote entrepreneurship and access to government financial schemes."
  },
  {
    title: "Women Empowerment and Social Welfare",
    text:
      "To empower women through education, health, leadership, and independence."
  },
  {
    title: "Legal Support and Collaboration",
    text:
      "To provide legal aid, prevent misuse, and collaborate with institutions."
  }
];

function About() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [openObjective, setOpenObjective] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSectionIndex((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = sections[sectionIndex];

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Us</h2>

      {/* OVERVIEW */}
      <div className="about-overview">
        <h3 className="overview-title">Who We Are</h3>
        <p>
          OBC Ransangram is a community-driven organization working for protection,
          empowerment, and holistic development of the OBC community.
        </p>
        <p>
          We function on constitutional values to ensure justice, equality,
          education, economic progress, and political awareness.
        </p>
      </div>

      {/* VISION / MISSION */}
      <h3 className="about-subtitle">{current.sectionTitle}</h3>

      <div className="vision-mission-container">
        <div className="vision-card">
          <img src={current.card.image} alt={current.card.title} />
          <h4>{current.card.title}</h4>
          <p>{current.card.text}</p>
        </div>

        <div className="vm-arrows">
          <button onClick={() =>
            setSectionIndex(sectionIndex === 0 ? sections.length - 1 : sectionIndex - 1)
          }>
            ‹
          </button>
          <button onClick={() =>
            setSectionIndex((sectionIndex + 1) % sections.length)
          }>
            ›
          </button>
        </div>
      </div>

      {/* OBJECTIVES */}
      <div className="objectives-section">
        <div className="objectives-title-wrapper">
          <h3 className="objectives-title">Our Objectives</h3>
        </div>

        <div className="objectives-grid">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className={`objective-card ${openObjective === i ? "open" : ""}`}
              onClick={() => setOpenObjective(openObjective === i ? null : i)}
            >
              <h4>{obj.title}</h4>
              {openObjective === i && <p>{obj.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
