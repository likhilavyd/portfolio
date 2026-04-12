import "../styles/Resume.css";
function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}LikhilaVydanaResume.pdf`;

  return (
    <div className="resume">
      <h2 className="title-resume">Resume</h2>
      <p className="content-resume">
        View my professional experience, education, and skills in detail.
      </p>
      <p className="resume-highlights">
        📌 <strong>Software Develeopment</strong> |📌 <strong>Full Stack Web Develeopment</strong> | 📌 <strong>Core Electronics</strong> | 📌 <strong>Data Analysis</strong>
      </p>
      
      <div className="resume-actions">
        <a 
          href={resumeUrl}
          className="btn-resume btn-primary" 
          download
          aria-label="Download resume as PDF"
        >
          📄 Download Resume
        </a>
        <a 
          href={resumeUrl}
          className="btn-resume btn-secondary" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="View resume online"
        >
          👁️ View Online
        </a>
      </div>
    </div>
  );
}

export default Resume;
