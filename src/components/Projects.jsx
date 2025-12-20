import "../styles/Projects.css";
import Card from "./Card";
import myhealthmateIcon from "../assets/projects/myhealthmate.png";

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">Here are some of my recent projects:</p>
      <div className="projects-list">
        <Card
          title="MyHealthMate"
          description="A comprehensive web-based personal health record and appointment management portal. Features secure user authentication, digital medical records storage, appointment booking system, and automated health reminders."
          icon={<img src={myhealthmateIcon} alt="MyHealthMate Icon" />}
          techStack={["HTML5", "CSS3", "Bootstrap", "JavaScript", "Firebase", "Responsive Design"]}
          demoLink="https://likhilavyd.github.io/HackOrbit_HackIt/"
          codeLink="https://github.com/likhilavyd/HackOrbit_HackIt"
        />
      </div>
    </section>
  );
}

export default Projects;