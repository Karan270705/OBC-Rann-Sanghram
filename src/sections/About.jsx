import { useEffect, useState } from "react";
import "./About.css";

const sections = [
  {
    sectionTitle: "Our Vision",
    cards: [
      {
        title: "Vision",
        text: "To empower the OBC community through equality, justice, and development so they can lead in every sphere of society."
      }
    ]
  },
  {
    sectionTitle: "Our Mission",
    cards: [
      {
        title: "Mission",
        text: "To protect the rights of the OBC community and work with government and society for their holistic development."
      }
    ]
  },
  {
    sectionTitle: "Our Objectives",
    cards: [
      {
        title: "Women Empowerment",
        text: "Promoting education, health, leadership, and economic independence of women in the OBC community."
      },
      {
        title: "Economic Empowerment",
        text: "Supporting entrepreneurship and access to government financial schemes."
      },
      {
        title: "Educational Support",
        text: "Ensuring scholarships, hostels, skill development, and career guidance."
      },
      {
        title: "Health & Welfare",
        text: "Health awareness campaigns, medical camps, and access to schemes."
      },
      {
        title: "Legal Assistance",
        text: "Providing free legal aid for land disputes and caste-based atrocities."
      }
    ]
  }
];

function About() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  const currentSection = sections[sectionIndex];
  const cards = currentSection.cards;

  // Auto-slide logic (SMART, not dumb)
  useEffect(() => {
    const interval = setInterval(() => {
      if (cardIndex < cards.length - 1) {
        setCardIndex(cardIndex + 1);
      } else {
        // move to next section
        setSectionIndex((sectionIndex + 1) % sections.length);
        setCardIndex(0);
      }
    }, 4000);

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
      <h2 className="about-title">About Us</h2>
      <h3 className="about-subtitle">{currentSection.sectionTitle}</h3>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prev}>‹</button>

        <div className="carousel">
  {cards.map((card, index) => {
    const isSingle = cards.length === 1;
    const offset = index - cardIndex;

    return (
      <div
        key={index}
        className={`card ${isSingle ? "card-full" : ""}`}
        style={
          isSingle
            ? {}
            : {
                transform: `translateX(${offset * 520}px) scale(${index === cardIndex ? 1 : 0.9})`,
                filter: index === cardIndex ? "none" : "blur(2px)",
                opacity: Math.abs(offset) > 1 ? 0 : 1,
                zIndex: index === cardIndex ? 2 : 1
              }
        }
      >
        <h3>{card.title}</h3>
        <p>{card.text}</p>
      </div>
    );
  })}
</div>


        <button className="arrow right" onClick={next}>›</button>
      </div>
    </section>
  );
}

export default About;
