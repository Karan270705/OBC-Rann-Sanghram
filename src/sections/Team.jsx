import "./Team.css";
import member1 from "../assets/one.jpg";
import member2 from "../assets/two.jpg";
import member3 from "../assets/three.jpg";

const teamMembers = [
  {
    name: "President",
    role: "Organization Leadership",
    image: member1,
    description:
      "Provides overall vision, leadership, and represents the organization at all levels."
  },
  {
    name: "General Secretary",
    role: "Administration",
    image: member2,
    description:
      "Manages communication, documentation, and coordination across departments."
  },
  {
    name: "Treasurer",
    role: "Finance Management",
    image: member3,
    description:
      "Handles budgeting, funds, and ensures financial transparency."
  }
];

function Team() {
  return (
    <section id="team" className="team-section">
      <h2 className="team-title">Our Team</h2>
      <p className="team-subtitle">
        People who drive the mission forward
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card-vertical">
            <div className="team-image-wrapper">
              <img src={member.image} alt={member.name} />
            </div>

            <div className="team-info">
              <h4>{member.name}</h4>
              <span>{member.role}</span>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
