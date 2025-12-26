import { useEffect, useState } from "react";
import "./About.css";

const cards = [
  {
    title: "Our Mission",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Our Vision",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Our Work",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Community Strength",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

function About() {
  const [activeIndex, setActiveIndex] = useState(1);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActiveIndex((prev) =>
      (prev + 1) % cards.length
    );
  };

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Us</h2>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prev}>
         ‹
        </button>

        <div className="carousel">
          {cards.map((card, index) => {
            const offset = index - activeIndex;

            return (
              <div
                key={index}
                className="card"
                style={{
                  transform: `translateX(${offset * 500}px) scale(${index === activeIndex ? 1 : 0.88})`,
                  filter: index === activeIndex ? "none" : "blur(2px)",
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                  zIndex: index === activeIndex ? 2 : 1
                }}
              >
                <h3>{card.title}</h3>
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
