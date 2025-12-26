import { useEffect, useState } from "react";
import "./About.css";
import visionImage from "../assets/our_vision.jpeg";
import missionImage from "../assets/our_mission.jpeg";
import womenEmpowermentImage from "../assets/women.jpeg";

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
  },
  {
    sectionTitle: "Our Objectives",
    cards: [
      {
        title: "Women Empowerment",
        image: womenEmpowermentImage,
        text:
          "Promoting education, health, leadership, and economic independence of women in the OBC community."
      },
      {
        title: "Economic Empowerment",
        text:
          "Supporting entrepreneurship and access to government financial schemes."
      },
      {
        title: "Educational Support",
        text:
          "Ensuring scholarships, hostels, skill development, and career guidance."
      },
      {
        title: "Health & Welfare",
        text:
          "Health awareness campaigns, medical camps, and access to schemes."
      },
      {
        title: "Legal Assistance",
        text:
          "Providing free legal aid for land disputes and caste-based atrocities."
      }
    ]
  }
];

function About() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const currentSection = sections[sectionIndex];
  const cards = currentSection.cards;

  const isObjectives = currentSection.sectionTitle === "Our Objectives";
  const isSingle = cards.length === 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (cardIndex < cards.length - 1) {
        setCardIndex((prev) => prev + 1);
      } else {
        setSectionIndex((prev) => (prev + 1) % sections.length);
        setCardIndex(0);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [cardIndex, cards.length, sectionIndex]);

  const prev = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    } else {
      const prevSection =
        sectionIndex === 0 ? sections.length - 1 : sectionIndex - 1;
      setSectionIndex(prevSection);
      setCardIndex(sections[prevSection].cards.length - 1);
    }
  };

  const next = () => {
    if (cardIndex < cards.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      setSectionIndex((sectionIndex + 1) % sections.length);
      setCardIndex(0);
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-overlay" />

      <h2 className="about-title">About Us</h2>
      <h3 className="about-subtitle">{currentSection.sectionTitle}</h3>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prev}>
          ‹
        </button>

        <div className="carousel">
          {cards.map((card, index) => {
            const offset = index - cardIndex;

            return (
              <div
                key={index}
                className={`
                  card
                  ${isSingle ? "card-full" : ""}
                  ${isObjectives ? "card-objective" : ""}
                `}
                style={
                  isSingle
                    ? {}
                    : {
                        transform: `translateX(${offset * (isObjectives ? 1000 : 520)}px) 
                                    scale(${index === cardIndex ? 1 : 0.9})`,
                        filter: index === cardIndex ? "none" : "blur(2px)",
                        opacity: Math.abs(offset) > 1 ? 0 : 1,
                        zIndex: index === cardIndex ? 2 : 1
                      }
                }
              >
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-image"
                  />
                )}

                <h3 className="card-title-center">{card.title}</h3>
                <p>{card.text}</p>
              </div>
            );
          })}
        </div>

        <button className="arrow right" onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}

export default About;
