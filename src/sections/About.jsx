import { useEffect, useState } from "react";
import "./About.css";

import visionImage from "../assets/our_vision.jpeg";
import missionImage from "../assets/our_mission.jpeg";

const sections = [
  {
    sectionTitle: "Our Vision",
    cards: [
      {
        title: "Protect Constitutional Rights",
        image: visionImage,
        text:
          "Upholding the constitutional rights of the OBC community and ensuring justice, equality, and dignity for all."
      }
    ]
  },
  {
    sectionTitle: "Our Mission",
    cards: [
      {
        title: "Our Mission",
        image: missionImage,
        text:
          "To protect OBC rights and work with government and society for holistic development."
      }
    ]
  }
];

const objectives = [
  {
    title: "Protection of Constitutional & Reservation Rights",
    text:
      "To safeguard the constitutional rights and educational and employment reservations granted to the OBC community and ensure their effective implementation."
  },
  {
    title: "Community Organization and Justice Advocacy",
    text:
      "To organize various OBC community groups, address their issues, and fight against social, economic, and cultural injustice."
  },
  {
    title: "Educational and Skill Development Support",
    text:
      "To provide scholarships, hostel facilities, skill development programs, and career guidance to OBC students."
  },
  {
    title: "Economic Empowerment and Entrepreneurship Development",
    text:
      "To promote economic empowerment by facilitating financial assistance through government schemes and encouraging entrepreneurship."
  },
  {
    title: "Women Empowerment and Social Welfare",
    text:
      "To empower women through education, healthcare, financial independence, leadership opportunities, and overall social welfare initiatives."
  },
  {
    title: "Legal Support, Awareness, and Collaboration",
    text:
      "To provide free legal assistance, prevent misuse such as fake certificates, raise awareness, and collaborate with social organizations and government bodies."
  }
];

function About() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [openObjective, setOpenObjective] = useState(null);

  const currentSection = sections[sectionIndex];
  const cards = currentSection.cards;
  const isSingle = cards.length === 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setSectionIndex((prev) => (prev + 1) % sections.length);
      setCardIndex(0);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setSectionIndex(
      sectionIndex === 0 ? sections.length - 1 : sectionIndex - 1
    );
    setCardIndex(0);
  };

  const next = () => {
    setSectionIndex((sectionIndex + 1) % sections.length);
    setCardIndex(0);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-overlay" />

      <h2 className="about-title">About Us</h2>
      <h3 className="about-subtitle">{currentSection.sectionTitle}</h3>

      {/* ===== Vision & Mission Carousel ===== */}
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prev}>‹</button>

        <div className="carousel">
          {cards.map((card, index) => (
            <div key={index} className={`card card-full`}>
              {card.image && (
                <img src={card.image} alt={card.title} className="card-image" />
              )}
              <h3 className="card-title-center">{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={next}>›</button>
      </div>

      {/* ===== Objectives Section (Appended Below) ===== */}
      <div className="objectives-section">
        <h3 className="objectives-title">Our Objectives</h3>

        <div className="objectives-grid">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className={`objective-card ${
                openObjective === index ? "open" : ""
              }`}
              onClick={() =>
                setOpenObjective(openObjective === index ? null : index)
              }
            >
              <h4>{obj.title}</h4>
              {openObjective === index && (
                <p className="objective-text">{obj.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
