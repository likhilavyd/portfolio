import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiR, SiExpress, SiMongodb, SiCplusplus, } from "react-icons/si";
import { MdDevices } from "react-icons/md";

function Skills() {
  const skills = [
    { icon: <SiCplusplus />, label: "C++" },
    { icon: <FaPython />, label: "Python" },
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
    { icon: <FaJs />, label: "JavaScript" },
    { icon: <FaReact />, label: "React JS" },
    { icon: <FaNodeJs />, label: "Node JS" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiR />, label: "R Language" },
    { icon: <FaGitAlt />, label: "Git & GitHub" },
    { icon: <MdDevices />, label: "Responsive Design" },
  ];

  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-description">Tech I work with:</p>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-label">{skill.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;