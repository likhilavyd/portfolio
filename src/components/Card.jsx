import "../styles/Card.css";
function Card({ title, description, icon, demoLink, codeLink, techStack }) {
  return (
    <div className="project-card">
      <div className="project-icon">{icon}</div>
      <h3 className="project-name">{title}</h3>
      <p className="project-description">{description}</p>
      
      {techStack && (
        <div className="project-tech-stack">
          <h4 className="tech-stack-title">Tech Stack:</h4>
          <div className="tech-stack-list">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      )}

      <div className="project-links">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link demo-link"
          >
            🚀 Live Demo
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link code-link"
          >
            📂 View Code
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;